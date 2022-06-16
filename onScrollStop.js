/**
 * "Cuando el usuario deje de desplazarse, ejecute la función de callback".
 *
 * La función toma dos argumentos:
 *
 * callback: La función que se ejecuta cuando el usuario deja de desplazarse.
 * refresh: El número de milisegundos a esperar antes de ejecutar la función de devolución de llamada.
 * El valor predeterminado para actualizar es 66 milisegundos
 * @param callback - La función que se llamará cuando el usuario deje de desplazarse.
 * @param [refresh=66] - El tiempo en milisegundos que se llamará a la función de devolución de llamada.
 * @returns Una función que se llamará cuando el usuario deje de desplazarse.
 */
export const onScrollStop = (callback, refresh = 66) => {
  if (!callback || typeof callback !== "function") return;

  let isScrolling;

  window.addEventListener(
    "scroll",
    function (event) {
      window.clearTimeout(isScrolling);

      isScrolling = setTimeout(callback, refresh);
    },
    false
  );
};
