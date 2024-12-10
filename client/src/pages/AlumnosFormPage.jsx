import { useForm } from 'react-hook-form'
import { crearAlumno } from "../api/alumnos.api";
import { useNavigate } from "react-router-dom";

export function AlumnosFormPage() {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const navigate = useNavigate()

  const onSubmit = handleSubmit(async (data) => {
    const res = await crearAlumno(data);
    navigate('/alumnos')
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="RUT (ej: 21322796-3)" {...register("dni", { required: true, pattern: /^[0-9]{7,8}-[0-9Kk]$/ })} />
        {errors.dni?.type === "required" && <span>RUT es obligatorio</span>}
        {errors.dni?.type === "pattern" && <span>RUT debe tener un formato válido</span>}
        <input type="text" placeholder="nombre" {...register("nombre", { required: true })} />
        <input type="text" placeholder="direccion" {...register("direccion", { required: true })} />
        <input type="text" placeholder="telefono" {...register("telefono", {
          required: true, maxLength: 9,
          minLength: 9,
        })} />
        {errors.telefono && <span>Teléfono debe tener 9 dígitos</span>}
        <input type="number" placeholder="edad" {...register("edad", { required: true, min: 1 })} />
        <button>Guardar</button>
      </form>
    </div>
  )
}