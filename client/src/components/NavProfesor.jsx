import { Link } from "react-router-dom";

export const NavProfesor = () => {
    return (
        <div className="flex justify-center py-5">

            <Link to={"/crear-profesor"}>
                <button className="bg-indigo-500 px-8 py-2 rounded-lg">Crear Profesor</button>
            </Link>

        </div >
    );
};
