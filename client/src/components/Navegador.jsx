import { Link } from "react-router-dom";
import { AlumnoList } from "./AlumnoList";

export const Navegador = () => {
  return (
    <div className="flex justify-center mt-4">
      <Link to={"../"}>
        <h1 className="font-bold text-3xl mb-2">Inicio</h1>
      </Link>
    </div>
  );
};
