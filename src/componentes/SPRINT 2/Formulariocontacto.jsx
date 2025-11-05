import { useState } from "react";

export default function FormularioContacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviar = (e) => {
    e.preventDefault();
    alert(`Mensaje enviado por ${nombre} (${correo}): ${mensaje}`);
  };

  return (
    <form onSubmit={enviar}>
      <input
        type="text"
        placeholder="Tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="email"
        placeholder="Tu correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />
      <textarea
        placeholder="Tu mensaje"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
