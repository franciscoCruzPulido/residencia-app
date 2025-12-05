import { useState } from "react";

export default function FormularioAviso({ onAgregarAviso }) {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");

  const enviarAviso = (e) => {
  e.preventDefault();
  const nuevoAviso = { titulo, contenido };
  onAgregarAviso(nuevoAviso);
  setTitulo("");
  setContenido("");

  // Simulación de notificación automática
  alert(`Notificación enviada: Se publicó un nuevo aviso "${nuevoAviso.titulo}"`);
};


  return (
    <form onSubmit={enviarAviso}>
      <h2>Crear nuevo aviso</h2>
      <input
        type="text"
        placeholder="Título del aviso"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
      />
      <textarea
        placeholder="Contenido del aviso"
        value={contenido}
        onChange={(e) => setContenido(e.target.value)}
        required
      />
      <button
  type="submit"
  style={{
    backgroundColor: "#4a90e2",
    color: "white",
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
  }}
>
  Publicar aviso
</button>

    </form>
  );
}
