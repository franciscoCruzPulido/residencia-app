export default function Boton({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        backgroundColor: "#4a90e2",
        color: "white",
        border: "none",
        padding: "0.75rem 1.5rem",
        fontSize: "1rem",
        borderRadius: "6px",
        cursor: "pointer",
        fontWeight: "bold",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "background-color 0.3s ease, transform 0.2s ease",
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = "#357ab8")}
      onMouseLeave={(e) => (e.target.style.backgroundColor = "#4a90e2")}
    >
      {children}
    </button>
  );
}

