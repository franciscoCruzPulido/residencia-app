import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#eee" }}>
      <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
        <li><Link to="/dashboard">Panel Admin</Link></li>
        <li><Link to="/avisos">Avisos</Link></li>
        <li><Link to="/reportes">Reportes</Link></li>
        <li><Link to="/reservas">Reservas</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/calendario">Calendario</Link></li>

      </ul>
    </nav>
  );
}
