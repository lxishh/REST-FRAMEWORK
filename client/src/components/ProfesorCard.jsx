import { useNavigate } from 'react-router-dom'

export function ProfesorCard({ profesor }) {

    const navigate = useNavigate()

    return (
        <div
            className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
            onClick={() => {
                navigate('/profesores/' + profesor.id)
            }}
        >
            <h1 className='font-bold uppercase'>{profesor.nombre}</h1>
            <p className='text-slate-400'>RUT: {profesor.dni}</p>
            <p className='text-slate-400'>Dirección: {profesor.direccion}</p>
            <p className='text-slate-400'>Teléfono: {profesor.telefono}</p>
        </div >
    )
}