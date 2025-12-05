import { FaExclamationTriangle, FaUsers } from "react-icons/fa";

export default function Tarjetadeaviso({ aviso }) {
  const icono = aviso.titulo.includes("Corte")
    ? <FaExclamationTriangle color="red" />
    : <FaUsers color="blue" />;

  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      {icono}
      <h3>{aviso.titulo}</h3>
      <p>Fecha: {aviso.fecha}</p>
    </div>
  );
}

