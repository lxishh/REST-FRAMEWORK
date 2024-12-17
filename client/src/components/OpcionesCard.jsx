
import { Link } from "react-router-dom";

const OpcionesCard = () => {
    return (
        <div className='max-w-xl mx-auto'>
            <Link to={'/profesores'}>
                <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>Profesores</button>
            </Link>
            <Link to={'/cursos'}>
                <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>Cursos</button>
            </Link>
            <Link to={'/alumnos'}>
                <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>Alumnos</button>
            </Link>
            <Link to={'/matriculas'}>
                <button className='bg-sky-500 p-3 rounded-lg block w-full mt-3'>Matriculas</button>
            </Link>


        </div >
    )
}

export default OpcionesCard;