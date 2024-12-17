import { useEffect, useState } from "react";
import { getAllAlumnos } from "../api/alumnos.api";
import { AlumnoCard } from "./AlumnoCard";

export function AlumnoList() {
    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {
        async function loadAlumnos() {
            const res = await getAllAlumnos();
            setAlumnos(res.data);
        }
        loadAlumnos();
    }, []);

    return (
        <div className="grid grid-cols-1 gap-3">
            {alumnos.map(alumno => (
                <AlumnoCard key={alumno.id} alumno={alumno} />
            ))}
        </div>
    );
}
