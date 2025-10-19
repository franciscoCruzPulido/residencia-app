import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../paginas/login";
import Dashboard from "../paginas/dashboard";
import Avisos from "../paginas/avisos";
import Visitas from "../paginas/visitas";
import Residentes from "../paginas/residentes";
import Contacto from "../paginascontacto";


export default function Approutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/avisos" element={<Avisos />} />
        <Route path="/visitas" element={<Visitas />} />
        <Route path="/residentes" element={<Residentes />} />
      </Routes>
    </BrowserRouter>
  );
}

