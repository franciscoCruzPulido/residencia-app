import { useState } from "react";

export default function FormularioReserva() {
  const [nombre, setNombre] = useState("");
  const [espacio, setEspacio] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const enviarReserva = (e) => {
    e.preventDefault();

    const nuevaReserva = { nombre, espacio, fecha, hora };
    const reservasGuardadas = JSON.parse(localStorage.getItem("reservas")) || [];
    reservasGuardadas.push(nuevaReserva);
    localStorage.setItem("reservas", JSON.stringify(reservasGuardadas));

    alert("Reserva enviada correctamente");
    setNombre("");
    setEspacio("");
    setFecha("");
    setHora("");
  };

  return (
    <form onSubmit={enviarReserva}>
      <h2>Reservar espacio</h2>
      <input
        type="text"
        placeholder="Tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Espacio a reservar (ej. Salón)"
        value={espacio}
        onChange={(e) => setEspacio(e.target.value)}
        required
      />
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
      <button type="submit">Enviar reserva</button>
    </form>
  );
}
