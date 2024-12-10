export function AlumnoCard({ alumno }) {
    return (
        <div>
            <p>{alumno.dni}</p>
            <p>{alumno.nombre}</p>
            <hr></hr>
        </div>
    )
}