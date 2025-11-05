import { useEffect, useState } from "react";

export default function Avisos() {
  const [avisos, setAvisos] = useState([]);

  useEffect(() => {
    const avisosGuardados = JSON.parse(localStorage.getItem("avisos")) || [];
    setAvisos(avisosGuardados);
  }, []);

  return (
    <div>
      <h1>Avisos para residentes</h1>
      {avisos.length === 0 ? (
        <p>No hay avisos disponibles.</p>
      ) : (
        <ul>
          {avisos.map((aviso, index) => (
            <li key={index}>
              <strong>{aviso.titulo}</strong>: {aviso.contenido}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


