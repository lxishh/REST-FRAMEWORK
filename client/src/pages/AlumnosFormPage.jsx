import { useEffect } from 'react';
import { get, useForm } from 'react-hook-form'
import { crearAlumno, eliminarAlumno, actualizarAlumno, getAlumno } from "../api/alumnos.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function AlumnosFormPage() {

  const { register, handleSubmit, formState: { errors }, setValue } = useForm()

  const navigate = useNavigate()
  const params = useParams()

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await actualizarAlumno(params.id, data)
      toast.success('Alumno actualizado', {
        position: 'bottom-right',
        style: {
          background: "#101010",
          color: '#fff'
        }
      })
    } else {
      await crearAlumno(data);
      toast.success('Alumno creado', {
        position: 'bottom-right',
        style: {
          background: "#101010",
          color: '#fff'
        }
      })
    }
    navigate('/alumnos')
  });

  useEffect(() => {
    async function cargarAlumno() {
      if (params.id) {
        const res = await getAlumno(params.id)
        setValue('dni', res.data.dni)
        setValue('nombre', res.data.nombre)
        setValue('direccion', res.data.direccion)
        setValue('telefono', res.data.telefono)
        setValue('edad', res.data.edad)
      }
    }
    cargarAlumno()
  }, [])

  return (
    <div className='max-w-xl mx-auto'>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="RUT (ej: 21322796-3)" {...register("dni", { required: true, pattern: /^[0-9]{7,8}-[0-9Kk]$/ })}
          className='bg-zinc-700 p-3 rounded-lg block w-full mb-3' />
        {errors.dni?.type === "required" && <span>RUT es obligatorio</span>}
        {errors.dni?.type === "pattern" && <span>RUT debe tener un formato válido</span>}
        <input type="text" placeholder="Nombre" {...register("nombre", { required: true })}
          className='bg-zinc-700 p-3 rounded-lg block w-full mb-3' />
        <input type="text" placeholder="Direccion (ej: Ramon Carnicer #2024)" {...register("direccion", { required: true })}
          className='bg-zinc-700 p-3 rounded-lg block w-full mb-3' />
        <input type="text" placeholder="Teléfono (ej: 920203422)" {...register("telefono", {
          required: true, maxLength: 9,
          minLength: 9,
        })}
          className='bg-zinc-700 p-3 rounded-lg block w-full mb-3' />
        {errors.telefono && <span>Teléfono debe tener 9 dígitos</span>}
        <input type="number" placeholder="Edad" {...register("edad", { required: true, min: 1 })}
          className='bg-zinc-700 p-3 rounded-lg block w-full mb-3' />
        <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>Guardar</button>
      </form>

      {params.id && <button
        className='bg-red-500 p-3 rounded-lg w-full mt-3'
        onClick={async () => {
          const respuesta = window.confirm('¿Seguro que deseas eliminar?')
          if (respuesta) {
            await eliminarAlumno(params.id)
            toast.success('Alumno Eliminado', {
              position: 'bottom-right',
              style: {
                background: "#101010",
                color: '#fff'
              }
            })
            navigate("/alumnos")
          }
        }}>
        Eliminar
      </button>}
    </div>
  )
}