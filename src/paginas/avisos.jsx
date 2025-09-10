import Tarjetadeaviso from "../componentes/tarjetadeaviso";

export default function Avisos() {
  const lista = [
    { id: 1, titulo: "Corte de agua", fecha: "2025-09-10" },
    { id: 2, titulo: "Junta vecinal", fecha: "2025-09-12" },
  ];

  return (
    <div>
      <h2>Avisos</h2>
      {lista.map((aviso) => (
        <Tarjetadeaviso key={aviso.id} aviso={aviso} />
      ))}
    </div>
  );
}
