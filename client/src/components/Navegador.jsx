import { Link } from "react-router-dom";

export const Navegador = () => {
  return (
    <div className="flex justify-between py-3">
      <Link to={"/alumnos"}>
        <h1 className="font-bold text-3xl mb-4">Alumnos</h1>
      </Link>
      <button className="bg-indigo-500 px-3 py-2 rounded-lg">
        <Link to={"/crear-alumno"}>Crear Alumno</Link>
      </button>
    </div>
  );
};
