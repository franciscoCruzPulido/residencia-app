import { useState } from "react";

export default function FormularioVisitas() {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");

  const enviar = (e) => {
    e.preventDefault();
    alert(`Visita registrada: ${nombre} el ${fecha}`);
  };

  return (
    <form onSubmit={enviar}>
      <input
        type="text"
        placeholder="Nombre del visitante"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />
      <button type="submit">Registrar</button>
    </form>
  );
} 
