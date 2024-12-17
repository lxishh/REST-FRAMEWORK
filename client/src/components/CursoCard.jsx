import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProfesor } from '../api/profesores.api'; // Se llama a la api de profesores 

export function CursoCard({ curso }) {
    const [profesorNombre, setProfesorNombre] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        async function loadProfesor() {
            if (curso.profesor) {
                const res = await getProfesor(curso.profesor); // 'curso.profesor' es el ID del profesor
                setProfesorNombre(res.data.nombre); // Aquí se guarda el nombre del profesor
            }
        }
        loadProfesor();
    }, [curso.profesor]);

    return (
        <div
            className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
            onClick={() => {
                navigate('/cursos/' + curso.id);
            }}
        >
            <h1 className="font-bold uppercase text-lg mb-2">{curso.nombre}</h1>
            <p className="text-slate-400">Código: {curso.codigo}</p>
            <p className="text-slate-400">Horas: {curso.horas}</p>
            <p className="text-slate-400">Sección: {curso.seccion}</p>
            <p className="text-slate-400">Profesor: {profesorNombre}</p> {/* Aquí se muestra el nombre del profesor */}
            <p className="text-slate-400 text-xs mt-2">Fecha inicio: {curso.fecha_inicio}</p>
            <p className="text-slate-400 text-xs">Fecha fin: {curso.fecha_fin}</p>
        </div>
    );
}
