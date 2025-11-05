import CryptoJS from "crypto-js";

export function encriptarDato(dato) {
  const claveSecreta = "clave123"; // Puedes cambiarla por una más segura
  return CryptoJS.AES.encrypt(dato, claveSecreta).toString();
}

export function desencriptarDato(datoEncriptado) {
  const claveSecreta = "clave123";
  const bytes = CryptoJS.AES.decrypt(datoEncriptado, claveSecreta);
  return bytes.toString(CryptoJS.enc.Utf8);
} 
