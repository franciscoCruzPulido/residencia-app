import { Routes, Route } from "react-router-dom";
import Login from "../paginas/login";
import Dashboard from "../paginas/dashboard";
import Avisos from "../paginas/avisos";
import Visitas from "../paginas/visitas";
import Residentes from "../paginas/residentes";
import Reportes from "../paginas/reportes";
import Contacto from "../paginas/contacto";
import Reservas from "../paginas/reservas";

export default function Approutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/avisos" element={<Avisos />} />
      <Route path="/visitas" element={<Visitas />} />
      <Route path="/residentes" element={<Residentes />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/reportes" element={<Reportes />} />
      <Route path="/reservas" element={<Reservas />} />
    </Routes>
  );
}
