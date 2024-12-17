import { FaArrowLeft } from "react-icons/fa"; // Usamos react-icons para la flecha
import { useNavigate } from "react-router-dom";

export const FlechaVolver = () => {
    const navigate = useNavigate();

    // Función para navegar hacia la página anterior
    const handleBack = () => {
        navigate(-1); // Esto hace que se regrese a la página anterior
    };

    return (
        <button onClick={handleBack} className="text-white text-2xl">
            <FaArrowLeft />
        </button>
    );
};
