import { useState } from "react";

export default function MenuIntegrador() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ margin: "1rem" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4a90e2",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Menú Integrador
      </button>

      {open && (
        <ul
          style={{
            listStyle: "none",
            marginTop: "10px",
            padding: "10px",
            backgroundColor: "#f4f4f4",
            border: "1px solid #ddd",
            borderRadius: "5px",
            width: "250px",
          }}
        >
          <li>
            <a href="/actividades" style={{ textDecoration: "none", color: "#333" }}>
              Actividades realizadas en el curso
            </a>
          </li>
          <li>
            <a href="/sistema" style={{ textDecoration: "none", color: "#333" }}>
              Sistema implementado
            </a>
          </li>
          <li>
            <a href="/codigo.zip" style={{ textDecoration: "none", color: "#333" }}>
              Código fuente (comprimido)
            </a>
          </li>
          <li>
            <a href="/reporte" style={{ textDecoration: "none", color: "#333" }}>
              Reporte de las modificaciones realizadas
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}
