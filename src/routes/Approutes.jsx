import { Routes, Route } from "react-router-dom";
import Login from "../sprint1/login";
import Dashboard from "../sprint1/dashboard";
import Avisos from "../paginas/avisos";
import Visitas from "../sprint3/visitas";
import Residentes from "../sprint3/residentes";
import Reportes from "../sprint2/reportes";
import Contacto from "../sprint2/contacto";
import Reservas from "../sprint2/reservas";
import Actividades from "../paginas/actividades";
import Sistema from "../paginas/sistema";
import Reporte from "../paginas/reporte";
import CalendarioPage from "../sprint3/calendario";

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
      <Route path="/actividades" element={<Actividades />} />
      <Route path="/sistema" element={<Sistema />} />
      <Route path="/reporte" element={<Reporte />} />
      <Route path="/calendario" element={<CalendarioPage />} />
    </Routes>
  );
}
