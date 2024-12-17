import axios from "axios";

const alumnoApi = axios.create({
  baseURL: "http://localhost:8000/api/v1/alumnos/"
})

export const getAllAlumnos = () =>  alumnoApi.get("/");

// hay que usar `${comillas inversas}` para usar `${template literals}` en JavaScript
export const getAlumno = (id) => alumnoApi.get(`/${id}/`)

export const crearAlumno = (alumno) => alumnoApi.post("/", alumno);

export const eliminarAlumno = (id) => alumnoApi.delete('/' + id);

export const actualizarAlumno = (id, alumno) => alumnoApi.put('/' + id + '/', alumno)