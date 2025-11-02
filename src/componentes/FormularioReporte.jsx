import { useState } from "react";

export default function FormularioReporte() {
  const [nombre, setNombre] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviarReporte = (e) => {
  e.preventDefault();

  const nuevoReporte = { nombre, asunto, mensaje };

  // Obtener reportes anteriores
  const reportesGuardados = JSON.parse(localStorage.getItem("reportes")) || [];

  // Agregar el nuevo
  reportesGuardados.push(nuevoReporte);

  // Guardar en localStorage
  localStorage.setItem("reportes", JSON.stringify(reportesGuardados));

  alert("Reporte enviado correctamente");
  setNombre("");
  setAsunto("");
  setMensaje("");
};


  return (
    <form onSubmit={enviarReporte}>
      <h2>Enviar reporte</h2>
      <input
        type="text"
        placeholder="Tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Asunto"
        value={asunto}
        onChange={(e) => setAsunto(e.target.value)}
        required
      />
      <textarea
        placeholder="Describe tu reporte"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
