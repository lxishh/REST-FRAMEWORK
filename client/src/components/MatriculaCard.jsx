import { useNavigate } from 'react-router-dom';

export function MatriculaCard({ matricula }) {
    const navigate = useNavigate();

    return (
        <div
            className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
            onClick={() => {
                navigate('/matriculas/' + matricula.id);
            }}
        >
            <h1 className="font-bold uppercase text-lg mb-2">
                {matricula.alumnoNombre} - {matricula.cursoNombre}
            </h1>
            <p className="text-slate-400">Fecha de matrícula: {matricula.fecha_matricula}</p>
        </div>
    );
}
