import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexxt/AuthContext";
import { encriptarDato } from "../componentes/seguridad"; 

export default function Login() {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const enviar = (e) => {
    e.preventDefault();
    const contraseñaEncriptada = encriptarDato(contraseña); 
    console.log("Contraseña encriptada:", contraseñaEncriptada); 

    // Simulación: validamos contra la versión encriptada de "1234"
    const contraseñaGuardada = encriptarDato("1234");
    if (correo === "admin@residencia.com" && contraseñaEncriptada === contraseñaGuardada) {
      login(correo, contraseña);
      navigate("/dashboard");
    } else {
      alert("Datos incorrectos");
    }
  };

  return (
    <form onSubmit={enviar}>
      <h2>Iniciar sesión</h2>
      <input
        type="email"
        placeholder="Correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={contraseña}
        onChange={(e) => setContraseña(e.target.value)}
      />
      <button type="submit">Entrar</button>
    </form>
  );
}

