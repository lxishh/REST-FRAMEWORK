import { useEffect, useState } from "react";
import { getAllAlumnos } from "../api/alumnos.api";

export function AlumnoList() {
    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {
        async function loadAlumnos() {
            const res = await getAllAlumnos();
            setAlumnos(res.data);
        }
        loadAlumnos();
    }, []);

    return <div>
        {alumnos.map(a => (
            <div key={a.id}>
                <p>{a.dni}</p>
                <p>{a.nombre}</p>
            </div>
        ))}
    </div>
}
