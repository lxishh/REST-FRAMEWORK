import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { crearMatricula, eliminarMatricula, actualizarMatricula, getMatricula } from "../api/matriculas.api";
import { getAllAlumnos } from "../api/alumnos.api";
import { getAllCursos } from "../api/cursos.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FlechaVolver } from "../components/FlechaVolver"; // Importamos el componente FlechaVolver

export function MatriculasFormPage() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const [alumnos, setAlumnos] = useState([]);
    const [cursos, setCursos] = useState([]);
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            await actualizarMatricula(params.id, data);
            toast.success("Matrícula actualizada", {
                position: "bottom-right",
                style: { background: "#101010", color: "#fff" },
            });
        } else {
            await crearMatricula(data);
            toast.success("Matrícula asignada", {
                position: "bottom-right",
                style: { background: "#101010", color: "#fff" },
            });
        }
        navigate("/matriculas");
    });

    useEffect(() => {
        async function cargarDatos() {
            try {
                // Cargar alumnos y cursos
                const resAlumnos = await getAllAlumnos();
                const resCursos = await getAllCursos();
                setAlumnos(resAlumnos.data);
                setCursos(resCursos.data);

                // Si es edición, cargar la matrícula existente
                if (params.id) {
                    const res = await getMatricula(params.id);
                    setValue("alumno", res.data.alumno);
                    setValue("curso", res.data.curso);
                }
            } catch (error) {
                console.error("Error al cargar datos:", error);
            }
        }
        cargarDatos();
    }, [params.id, setValue]);

    return (
        <div className="max-w-xl mx-auto mt-5">
            <FlechaVolver />
            <form onSubmit={onSubmit}>
                {/* Select para Alumno */}
                <label className="block text-sm font-medium mb-1 mt-5">Alumno</label>
                <select
                    {...register("alumno", { required: true })}
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                >
                    <option value="">Seleccione un alumno</option>
                    {alumnos.map((alumno) => (
                        <option key={alumno.id} value={alumno.id}>
                            {alumno.nombre}
                        </option>
                    ))}
                </select>
                {errors.alumno && <p className="text-red-500 text-sm">El alumno es obligatorio</p>}

                {/* Select para Curso */}
                <label className="block text-sm font-medium mb-1">Curso</label>
                <select
                    {...register("curso", { required: true })}
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                >
                    <option value="">Seleccione un curso</option>
                    {cursos.map((curso) => (
                        <option key={curso.id} value={curso.id}>
                            {curso.nombre}
                        </option>
                    ))}
                </select>
                {errors.curso && <p className="text-red-500 text-sm">El curso es obligatorio</p>}

                {/* Botón Guardar */}
                <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">Guardar</button>
            </form>

            {/* Botón Eliminar */}
            {params.id && (
                <button
                    className="bg-red-500 p-3 rounded-lg w-full mt-3"
                    onClick={async () => {
                        const respuesta = window.confirm("¿Seguro que deseas eliminar?");
                        if (respuesta) {
                            await eliminarMatricula(params.id);
                            toast.success("Matrícula eliminada", {
                                position: "bottom-right",
                                style: { background: "#101010", color: "#fff" },
                            });
                            navigate("/matriculas");
                        }
                    }}
                >
                    Eliminar
                </button>
            )}
        </div>
    );
}
