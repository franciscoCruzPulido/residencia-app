import { useState } from "react";

export default function FormularioReserva() {
  const [nombre, setNombre] = useState("");
  const [espacio, setEspacio] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const enviarReserva = (e) => {
    e.preventDefault();

    const reservasGuardadas = JSON.parse(localStorage.getItem("reservas")) || [];

    // Validar si ya existe una reserva en el mismo espacio, fecha y hora
    const existe = reservasGuardadas.some(
      (r) => r.espacio === espacio && r.fecha === fecha && r.hora === hora
    );

    if (existe) {
      alert("Ese espacio ya está reservado en esa fecha y hora.");
      return;
    }

    const nuevaReserva = { nombre, espacio, fecha, hora };
    reservasGuardadas.push(nuevaReserva);
    localStorage.setItem("reservas", JSON.stringify(reservasGuardadas));

    // Confirmación de reserva
    alert("Reserva enviada correctamente");

    // Simulación de notificación automática
    alert(
      `Notificación enviada: Reserva confirmada para ${espacio} el ${fecha} a las ${hora}`
    );

    // Limpiar campos
    setNombre("");
    setEspacio("");
    setFecha("");
    setHora("");
  };

  return (
    <div>
      <h2>Formulario de Reserva</h2>
      <form onSubmit={enviarReserva}>
        <input
          type="text"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <select
          value={espacio}
          onChange={(e) => setEspacio(e.target.value)}
          required
        >
          <option value="">Selecciona un espacio</option>
          <option value="Salón de usos múltiples">Salón de usos múltiples</option>
          <option value="Cancha">Cancha</option>
          <option value="Jardín">Jardín</option>
        </select>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />
        <input
          type="time"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          required
        />
        <button type="submit">Reservar</button>
      </form>
    </div>
  );
}
