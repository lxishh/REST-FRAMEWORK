import { Link } from "react-router-dom";

export const NavAlumno = () => {
    return (
        <div className="flex justify-center py-5">

            <Link to={"/crear-alumno"}>
                <button className="bg-indigo-500 px-8 py-2 rounded-lg">Crear Alumno</button>
            </Link>

        </div >
    );
};
