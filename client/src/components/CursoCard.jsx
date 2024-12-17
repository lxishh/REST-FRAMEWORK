import { useNavigate } from 'react-router-dom'

export function CursoCard({ curso }) {

    const navigate = useNavigate()

    return (
        <div
            className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
            onClick={() => {
                navigate('/cursos/' + curso.id)
            }}
        >
            <h1 className='font-bold uppercase text-lg mb-2'>{curso.nombre}</h1>
            <p className='text-slate-400'>Código: {curso.codigo}</p>
            <p className='text-slate-400'>Horas: {curso.horas}</p>
            <p className='text-slate-400'>Sección: {curso.seccion}</p>
            <p className='text-slate-400'>Profesor: {curso.profesor}</p>
            <p className='text-slate-400 text-xs mt-2'>Fecha inicio: {curso.fecha_inicio}</p>
            <p className='text-slate-400 text-xs'>Fecha fin: {curso.fecha_fin}</p>
        </div >
    )
}
