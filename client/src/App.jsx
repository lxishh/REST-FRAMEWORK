import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AlumnosPage } from "./pages/AlumnosPage";
import { AlumnosFormPage } from "./pages/AlumnosFormPage";
import { Navegador } from "./components/Navegador";
import { Toaster } from "react-hot-toast";
import { InicioPage } from "./pages/InicioPage";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navegador />
        <Routes>
          <Route path="/" element={<InicioPage />}></Route>
          <Route path="/alumnos" element={<AlumnosPage />} />
          <Route path="/crear-alumno" element={<AlumnosFormPage />} />
          <Route path="/alumnos/:id" element={<AlumnosFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter >
  );
}

export default App;
