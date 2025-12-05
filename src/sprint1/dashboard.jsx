import { useEffect, useState } from "react";
import FormularioAviso from "../sprint2/componentes/FormularioAviso";

export default function Dashboard() {
  const [reportes, setReportes] = useState([]);
  const [avisos, setAvisos] = useState([]);
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const reportesGuardados = JSON.parse(localStorage.getItem("reportes")) || [];
    setReportes(reportesGuardados);

    const avisosGuardados = JSON.parse(localStorage.getItem("avisos")) || [];
    setAvisos(avisosGuardados);

    const reservasGuardadas = JSON.parse(localStorage.getItem("reservas")) || [];
    setReservas(reservasGuardadas);
  }, []);

  const agregarAviso = (nuevoAviso) => {
    const nuevosAvisos = [...avisos, nuevoAviso];
    setAvisos(nuevosAvisos);
    localStorage.setItem("avisos", JSON.stringify(nuevosAvisos));
  };

  return (
    <div>
      <h1>Panel de Administración</h1>

      <h2>Reportes recibidos</h2>
      {reportes.length === 0 ? (
        <p>No hay reportes aún.</p>
      ) : (
        <ul>
          {reportes.map((reporte, index) => (
            <li key={index}>
              <strong>{reporte.asunto}</strong> — {reporte.nombre}: {reporte.mensaje}
            </li>
          ))}
        </ul>
      )}

      <FormularioAviso onAgregarAviso={agregarAviso} />

      <h2>Avisos publicados</h2>
      {avisos.length === 0 ? (
        <p>No hay avisos aún.</p>
      ) : (
        <ul>
          {avisos.map((aviso, index) => (
            <li key={index}>
              <strong>{aviso.titulo}</strong>: {aviso.contenido}
            </li>
          ))}
        </ul>
      )}

      <h2>Reservas realizadas</h2>
      {reservas.length === 0 ? (
        <p>No hay reservas aún.</p>
      ) : (
        <ul>
          {reservas.map((reserva, index) => (
            <li key={index}>
              <strong>{reserva.espacio}</strong> — {reserva.nombre} el {reserva.fecha} a las {reserva.hora}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

