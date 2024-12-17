import { useEffect, useState } from "react";
import { getAllCursos } from "../api/cursos.api";
import { CursoCard } from "./CursoCard";

export function CursoList() {
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        async function loadCursos() {
            const res = await getAllCursos();
            setCursos(res.data);
        }
        loadCursos();
    }, []);

    return (
        <div className="grid grid-cols-1 gap-3">
            {cursos.map(curso => (
                <CursoCard key={curso.id} curso={curso} />
            ))}
        </div>
    );
}
