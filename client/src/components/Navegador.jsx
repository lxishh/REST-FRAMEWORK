import { Link } from "react-router-dom";

export const Navegador = () => {
  return (
    <div>
      <Link to={"/alumnos"}>
        <h1>Alumnos</h1>
      </Link>
      <Link to={"/alumnos-create"}>Crear Alumno</Link>
    </div>
  );
};
