import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AlumnosPage } from "./pages/AlumnosPage";
import { AlumnosFormPage } from "./pages/AlumnosFormPage";
// profesores
import { ProfesoresPage } from "./pages/ProfesoresPage";
import { ProfesoresFormPage } from "./pages/ProfesoresFormPage";
import { Navegador } from "./components/Navegador";
import { Toaster } from "react-hot-toast";
import { InicioPage } from "./pages/InicioPage";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navegador />
        <Routes>
          {/* INICIO - OPCIONES CARD */}
          <Route path="/" element={<InicioPage />}></Route>
          {/* ALUMNOS  */}
          <Route path="/alumnos" element={<AlumnosPage />} />
          <Route path="/crear-alumno" element={<AlumnosFormPage />} />
          <Route path="/alumnos/:id" element={<AlumnosFormPage />} />
          {/* PROFESORES */}
          <Route path="/profesores" element={<ProfesoresPage />} />
          <Route path="/crear-profesor" element={<ProfesoresFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter >
  );
}

export default App;
