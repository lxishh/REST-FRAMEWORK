import { useEffect } from 'react';
import { get, useForm } from 'react-hook-form'
import { crearProfesor, eliminarProfesor, actualizarProfesor, getProfesor } from "../api/profesores.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FlechaVolver } from "../components/FlechaVolver"; // Importamos el componente FlechaVolver

export function ProfesoresFormPage() {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm()

    const navigate = useNavigate()
    const params = useParams()

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            await actualizarProfesor(params.id, data)
            toast.success('Profesor actualizado', {
                position: 'bottom-right',
                style: {
                    background: "#101010",
                    color: '#fff'
                }
            })
        } else {
            await crearProfesor(data);
            toast.success('Profesor creado', {
                position: 'bottom-right',
                style: {
                    background: "#101010",
                    color: '#fff'
                }
            })
        }
        navigate('/profesores')
    });

    useEffect(() => {
        async function cargarProfesor() {
            if (params.id) {
                const res = await getProfesor(params.id)
                setValue('dni', res.data.dni)
                setValue('nombre', res.data.nombre)
                setValue('direccion', res.data.direccion)
                setValue('telefono', res.data.telefono)
                setValue('edad', res.data.edad)
            }
        }
        cargarProfesor()
    }, [])

    return (
        <div className='max-w-xl mx-auto mt-5'>
            <FlechaVolver />
            <form onSubmit={onSubmit} className='mt-5'>
                <input type="text" placeholder="RUT (ej: 12836841-3)" {...register("dni", { required: true, pattern: /^[0-9]{7,8}-[0-9Kk]$/ })}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3' />
                {errors.dni?.type === "required" && <span>RUT es obligatorio</span>}
                {errors.dni?.type === "pattern" && <span>RUT debe tener un formato válido</span>}
                <input type="text" placeholder="Nombre" {...register("nombre", { required: true })}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3' />
                <input type="text" placeholder="Direccion (ej: Curacautin #128)" {...register("direccion", { required: true })}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3' />
                <input type="text" placeholder="Teléfono (ej: 920203422)" {...register("telefono", {
                    required: true, maxLength: 9,
                    minLength: 9,
                })}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3' />
                {errors.telefono && <span>Teléfono debe tener 9 dígitos</span>}
                <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>Guardar</button>
            </form>

            {
                params.id && <button
                    className='bg-red-500 p-3 rounded-lg w-full mt-3'
                    onClick={async () => {
                        const respuesta = window.confirm('¿Seguro que deseas eliminar?')
                        if (respuesta) {
                            await eliminarProfesor(params.id)
                            toast.success('Profesor Eliminado', {
                                position: 'bottom-right',
                                style: {
                                    background: "#101010",
                                    color: '#fff'
                                }
                            })
                            navigate("/profesores")
                        }
                    }}>
                    Eliminar
                </button>
            }
        </div >
    )
}