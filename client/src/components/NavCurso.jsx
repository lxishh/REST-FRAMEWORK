import { Link } from "react-router-dom";

export const NavCurso = () => {
    return (
        <div className="flex justify-center py-5">

            <Link to={"/crear-curso"}>
                <button className="bg-indigo-500 px-8 py-2 rounded-lg">Crear Curso</button>
            </Link>

        </div >
    );
};
