export default function Tarjetadeaviso({ aviso }) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>{aviso.titulo}</h3>
      <p>Fecha: {aviso.fecha}</p>
    </div>
  );
}
