/**
 * Toma un objeto y devuelve un nuevo objeto con todas las propiedades del objeto original, pero
 * con los valores de esas propiedades reemplazadas con versiones inmutables de sí mismas.
 * @param obj - El objeto que se hará inmutable.
 * @returns Una función que toma un objeto y devuelve un nuevo objeto con todas las propiedades del
 * objeto original, pero con los valores de esas propiedades reemplazadas con versiones inmutables de
 * ellos mismos.
 */
export const immutable = (obj) => {
  /**
   * Toma un objeto y devuelve un nuevo objeto con todas las propiedades del objeto original, pero
   * con los valores de esas propiedades reemplazadas con versiones inmutables de sí mismas
   * @param clone - El objeto que será devuelto
   */
  const immutableProps = (clone) => {
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        clone[key] = immutable(obj[key]);
      }
    }
  };

  /**
   * Devuelve un objeto con propiedades inmutables.
   * @returns Un objeto con las propiedades de la función immutableProps.
   */
  const immutableObj = () => {
    let clone = {};
    immutableProps(clone);
    return clone;
  };

  /**
   * Toma una matriz de objetos y devuelve una matriz de objetos inmutables.
   * @returns Una matriz de objetos inmutables.
   */
  const immutableArr = () => {
    return obj.map(function (item) {
      return immutable(item);
    });
  };

  /**
   * "Si el objeto es un mapa, cree un nuevo mapa y llame recursivamente a inmutable() en cada valor".
   *
   * El resto del código es similar.
   * @returns Un nuevo objeto Map con las mismas claves y valores que el objeto Map original.
   */
  const immutableMap = () => {
    let clone = new Map();
    for (let [key, val] of obj) {
      clone.set(key, immutable(val));
    }
    return clone;
  };

  /**
   * "Si el valor es un conjunto, cree un nuevo conjunto y agregue cada elemento del conjunto original al nuevo conjunto".
   *
   * La función anterior es un poco más complicada que las anteriores porque tiene que hacer un bucle
   * a través de cada elemento en el Conjunto y agréguelo al nuevo Conjunto
   * @returns Un nuevo conjunto con todos los elementos del conjunto original, pero cada elemento es inmutable.
   */
  const immutableSet = () => {
    let clone = new Set();
    for (let item of set) {
      clone.add(immutable(item));
    }
    return clone;
  };

  /**
   * Crea un nuevo objeto con las mismas propiedades que el objeto original.
   * @returns Una función que devuelve un clon del objeto.
   */
  const immutableFunction = () => {
    let clone = obj.bind(this);
    immutableProps(clone);
    return clone;
  };

  /* Obtener el tipo del objeto. */
  let type = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();

  /* Comprobando el tipo del objeto y devolviendo la función apropiada. */
  if (type === "object") return immutableObj();
  if (type === "array") return immutableArr();
  if (type === "map") return immutableMap();
  if (type === "set") return immutableSet();
  if (type === "function") return immutableFunction();
  return obj;
};
