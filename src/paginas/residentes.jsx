import Tarjetaresidente from "../componentes/tarjetaresidente";

export default function Residentes() {
  const lista = [
    { id: 1, nombre: "Ana López", departamento: "A1" },
    { id: 2, nombre: "Carlos Ruiz", departamento: "B2" },
  ];

  return (
    <div>
      <h2>Residentes</h2>
      {lista.map((res) => (
        <Tarjetaresidente key={res.id} residente={res} />
      ))}
    </div>
  );
}
