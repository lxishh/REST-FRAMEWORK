import axios from "axios";

const alumnoApi = axios.create({
  baseURL: "http://localhost:8000/api/v1/alumnos/"
})

export const getAllAlumnos = () =>  alumnoApi.get("/");

export const crearAlumno = (alumno) => alumnoApi.post("/", alumno);
