import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AlumnosPage } from "./pages/AlumnosPage";
import { AlumnosFormPage } from "./pages/AlumnosFormPage";
import { Navegador } from "./components/Navegador";

function App() {
  return (
    <BrowserRouter>
      <Navegador />
      <Routes>
        <Route path="/" element={<Navigate to={"/alumnos"} />}></Route>
        <Route path="/alumnos" element={<AlumnosPage />} />
        <Route path="/alumnos-create" element={<AlumnosFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
