import axios from "axios";

const cursoApi = axios.create({
  baseURL: "http://localhost:8000/api/v1/cursos/"
})

export const getAllCursos = () =>  cursoApi.get("/");

// hay que usar `${comillas inversas}` para usar `${template literals}` en JavaScript
export const getCurso = (id) => cursoApi.get(`/${id}/`)

export const crearCurso = (curso) => cursoApi.post("/", curso);

export const eliminarCurso = (id) => cursoApi.delete('/' + id);

export const actualizarCurso = (id, curso) => cursoApi.put('/' + id + '/', curso)