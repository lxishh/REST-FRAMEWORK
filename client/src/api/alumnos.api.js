import axios from "axios";

export const getAllAlumnos = () => {
  return axios.get("http://localhost:8000/api/v1/alumnos/");
};
