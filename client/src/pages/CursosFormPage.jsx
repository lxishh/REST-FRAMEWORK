import { useEffect, useState } from 'react';
import { get, useForm } from 'react-hook-form'
import { crearCurso, eliminarCurso, actualizarCurso, getCurso } from "../api/cursos.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { getAllProfesores } from "../api/profesores.api";
import { FlechaVolver } from "../components/FlechaVolver"; // Importamos el componente FlechaVolver

export function CursosFormPage() {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm()

    const navigate = useNavigate()
    const params = useParams()

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            await actualizarCurso(params.id, data)
            toast.success('Curso actualizado', {
                position: 'bottom-right',
                style: {
                    background: "#101010",
                    color: '#fff'
                }
            })
        } else {
            await crearCurso(data);
            toast.success('Curso creado', {
                position: 'bottom-right',
                style: {
                    background: "#101010",
                    color: '#fff'
                }
            })
        }
        navigate('/cursos')
    });

    const [profesores, setProfesores] = useState([]);

    useEffect(() => {
        async function cargarCursoYProfesores() {
            if (params.id) {
                const res = await getCurso(params.id);
                setValue('codigo', res.data.codigo);
                setValue('horas', res.data.horas);
                setValue('nombre', res.data.nombre);
                setValue('descripcion', res.data.descripcion);
                setValue('fecha_inicio', res.data.fecha_inicio);
                setValue('fecha_fin', res.data.fecha_fin);
                setValue('seccion', res.data.seccion);
                setValue('profesor', res.data.profesor || "");
            }

            // Cargar los profesores
            const resProfesores = await getAllProfesores();
            setProfesores(resProfesores.data);
        }
        cargarCursoYProfesores();
    }, []);

    return (
        <div className='max-w-xl mx-auto mt-5'>
            <FlechaVolver />
            <form onSubmit={onSubmit} className='mt-5'>
                <input
                    type="text"
                    placeholder="Código"
                    {...register("codigo", { required: true })}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                />
                <input
                    type="number"
                    placeholder="Horas"
                    {...register("horas", { required: true, min: 1 })}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                />
                <input
                    type="text"
                    placeholder="Nombre"
                    {...register("nombre", { required: true })}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                />
                <textarea
                    placeholder="Descripción"
                    {...register("descripcion", { required: true })}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                ></textarea>

                <div className="mb-3">
                    <label htmlFor="fecha_inicio" className="block text-sm text-gray-400">Fecha de inicio</label>
                    <input
                        id="fecha_inicio"
                        type="date"
                        {...register("fecha_inicio", { required: true })}
                        className="bg-zinc-700 p-3 rounded-lg block w-full"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="fecha_fin" className="block text-sm text-gray-400">Fecha de termino</label>
                    <input
                        id="fecha_fin"
                        type="date"
                        {...register("fecha_fin", { required: true })}
                        className="bg-zinc-700 p-3 rounded-lg block w-full"
                    />
                </div>

                <input
                    type="text"
                    placeholder="Sección"
                    {...register("seccion", { required: true })}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                />
                <select
                    {...register("profesor", { required: false })}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                >
                    <option value="">Seleccione un profesor</option>
                    {profesores.map((profesor) => (
                        <option key={profesor.id} value={profesor.id}>
                            {profesor.nombre}
                        </option>
                    ))}
                </select>

                <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>Guardar</button>
            </form>

            {params.id && <button
                className='bg-red-500 p-3 rounded-lg w-full mt-3'
                onClick={async () => {
                    const respuesta = window.confirm('¿Seguro que deseas eliminar?')
                    if (respuesta) {
                        await eliminarCurso(params.id)
                        toast.success('Curso Eliminado', {
                            position: 'bottom-right',
                            style: {
                                background: "#101010",
                                color: '#fff'
                            }
                        })
                        navigate("/cursos")
                    }
                }}>
                Eliminar
            </button>}
        </div>
    )
}