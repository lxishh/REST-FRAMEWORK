import axios from "axios";

const profesorApi = axios.create({
  baseURL: "http://localhost:8000/api/v1/profesores/"
})

export const getAllProfesores = () =>  profesorApi.get("/");

// hay que usar `${comillas inversas}` para usar `${template literals}` en JavaScript
export const getProfesor = (id) => profesorApi.get(`/${id}/`)

export const crearProfesor = (profesor) => profesorApi.post("/", profesor);

export const eliminarProfesor = (id) => profesorApi.delete('/' + id);

export const actualizarProfesor = (id, profesor) => profesorApi.put('/' + id + '/', profesor)