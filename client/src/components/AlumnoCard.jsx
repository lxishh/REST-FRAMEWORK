import { useNavigate } from 'react-router-dom'

import { useEffect, useState } from 'react';
import { getAllCursos } from '../api/cursos.api'

export function AlumnoCard({ alumno }) {

    const navigate = useNavigate()

    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        const fetchCursos = async () => {
            const response = await getAllCursos();
            setCursos(response.data); // Guardamos todos los cursos
        };

        fetchCursos();
    }, []);

    // Mapear los cursos del alumno por ID
    const cursosNombres = alumno.cursos.map((cursoId) => {
        const curso = cursos.find((curso) => curso.id === cursoId);
        return curso ? curso.nombre : 'Curso no encontrado';
    });

    return (
        <div
            className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
            onClick={() => {
                navigate('/alumnos/' + alumno.id)
            }}
        >
            <h1 className='font-bold uppercase'>{alumno.nombre}</h1>
            <p className='text-slate-400'>RUT: {alumno.dni}</p>
            <p className='text-slate-400'>Dirección: {alumno.direccion}</p>
            <p className='text-slate-400'>Teléfono: {alumno.telefono}</p>
            <p className='text-slate-400'>Edad: {alumno.edad}</p>
            <p className="text-slate-400">Cursos: {cursosNombres.join(', ')}</p>
        </div >
    )
}