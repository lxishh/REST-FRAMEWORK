import axios from "axios";

const matriculaApi = axios.create({
  baseURL: "http://localhost:8000/api/v1/matriculas/"
})

export const getAllMatriculas = () =>  matriculaApi.get("/");

// hay que usar `${comillas inversas}` para usar `${template literals}` en JavaScript
export const getMatricula = (id) => matriculaApi.get(`/${id}/`)

export const crearMatricula = (matricula) => matriculaApi.post("/", matricula);

export const eliminarMatricula = (id) => matriculaApi.delete('/' + id);

export const actualizarMatricula = (id, matricula) => matriculaApi.put('/' + id + '/', matricula)