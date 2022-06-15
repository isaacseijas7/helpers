/**
 * Genera una cadena aleatoria de longitud 5 y reemplaza cada carácter con un hexadecimal aleatorio
 * número
 * @returns Una función que devuelve una cadena.
 */
export const uuid = () => {
  return "x4xyy".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16).toUpperCase();
  });
};
