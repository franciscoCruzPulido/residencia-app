import { useState } from "react";

export default function Calendario() {
  const [eventos, setEventos] = useState(
    JSON.parse(localStorage.getItem("eventos")) || []
  );
  const [titulo, setTitulo] = useState("");
  const [fecha, setFecha] = useState("");

  const agregarEvento = (e) => {
    e.preventDefault();
    const nuevo = { titulo, fecha };
    const actualizados = [...eventos, nuevo];
    setEventos(actualizados);
    localStorage.setItem("eventos", JSON.stringify(actualizados));
    setTitulo("");
    setFecha("");
    alert("Evento agregado al calendario");
  };

  return (
    <div>
      <h2>Calendario de actividades</h2>
      <form onSubmit={agregarEvento}>
        <input
          type="text"
          placeholder="Título del evento"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />
        <button type="submit">Agregar evento</button>
      </form>

      <h3>Eventos programados</h3>
      {eventos.length === 0 ? (
        <p>No hay eventos.</p>
      ) : (
        <ul>
          {eventos.map((ev, i) => (
            <li key={i}>
              <strong>{ev.titulo}</strong> — {ev.fecha}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
