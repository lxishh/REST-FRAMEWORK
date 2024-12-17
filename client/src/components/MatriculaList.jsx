import { useEffect, useState } from "react";
import { getAllMatriculas } from "../api/matriculas.api";
import { getAllAlumnos } from "../api/alumnos.api"; // Asegúrate de tener esta API
import { getAllCursos } from "../api/cursos.api"; // Asegúrate de tener esta API
import { MatriculaCard } from "./MatriculaCard";

export function MatriculaList() {
    const [matriculas, setMatriculas] = useState([]);
    const [alumnos, setAlumnos] = useState([]);
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        async function loadData() {
            try {
                // Obtener matriculas, alumnos y cursos simultáneamente
                const [matriculasRes, alumnosRes, cursosRes] = await Promise.all([
                    getAllMatriculas(),
                    getAllAlumnos(),
                    getAllCursos(),
                ]);

                setMatriculas(matriculasRes.data);
                setAlumnos(alumnosRes.data);
                setCursos(cursosRes.data);
            } catch (error) {
                console.error("Error cargando datos:", error);
            }
        }
        loadData();
    }, []);

    // Mapear las matriculas con los nombres de alumnos y cursos
    const matriculasConNombres = matriculas.map((matricula) => {
        const alumno = alumnos.find((a) => a.id === matricula.alumno); // Buscar alumno por ID
        const curso = cursos.find((c) => c.id === matricula.curso); // Buscar curso por ID

        return {
            ...matricula,
            alumnoNombre: alumno ? alumno.nombre : "Desconocido", // Si no se encuentra, poner "Desconocido"
            cursoNombre: curso ? curso.nombre : "Desconocido", // Lo mismo para curso
        };
    });

    return (
        <div className="grid grid-cols-1 gap-3">
            {matriculasConNombres.map(matricula => (
                <MatriculaCard key={matricula.id} matricula={matricula} />
            ))}
        </div>
    );
}
