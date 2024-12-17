
import { Link } from "react-router-dom";

const OpcionesCard = () => {
    return (
        <div className='max-w-xl mx-auto'>
            <Link to={'/alumnos'}>
                <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>Alumnos</button>
            </Link>
            <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>Profesores</button>
            <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>Cursos</button>
        </div >
    )
}

export default OpcionesCard