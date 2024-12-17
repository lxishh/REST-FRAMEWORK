import { useEffect, useState } from "react";
import { getAllProfesores } from "../api/profesores.api";
import { ProfesorCard } from "./ProfesorCard";

export function ProfesorList() {
    const [profesores, setProfesores] = useState([]);

    useEffect(() => {
        async function loadProfesores() {
            const res = await getAllProfesores();
            setProfesores(res.data);
        }
        loadProfesores();
    }, []);

    return (
        <div className="grid grid-cols-1 gap-3">
            {profesores.map(profesor => (
                <ProfesorCard key={profesor.id} profesor={profesor} />
            ))}
        </div>
    );
}
