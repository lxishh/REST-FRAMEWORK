import { Link } from "react-router-dom";
import { FlechaVolver } from "./FlechaVolver"; // Importamos el componente Flecha de regreso

export const NavProfesor = () => {
    return (
        <div className="flex flex-col items-center py-5">
            {/* Flecha de regreso */}
            <div className="flex w-full justify-start mb-4">
                <FlechaVolver /> {/* Usamos el componente FlechaVolver */}
            </div>

            {/* Título centrado */}
            <h1 className="text-3xl font-bold mb-4">Profesores</h1>

            {/* Botón de crear profesor centrado */}
            <Link to="/crear-profesor">
                <button className="bg-indigo-500 px-8 py-2 rounded-lg">Crear Profesor</button>
            </Link>
        </div>
    );
};
