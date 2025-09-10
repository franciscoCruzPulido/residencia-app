export default function Tarjetaresidente({ residente }) {
  return (
    <div style={{ border: "1px solid blue", margin: "10px", padding: "10px" }}>
      <h3>{residente.nombre}</h3>
      <p>Departamento: {residente.departamento}</p>
    </div>
  );
}
