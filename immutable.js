/**
 * Toma un objeto y devuelve una copia de ese objeto.
 * @param myObject - El objeto que desea hacer inmutable.
 * @returns una copia del objeto que se pasa.
 */
export const immutable = (myObject) => {
  if (typeof myObject !== "object") {
    return myObject;
  }

  const copyObject = JSON.parse(JSON.stringify(myObject));
  Object.assign(copyObject, myObject);

  Object.entries(copyObject).forEach((por) => {
    const [key, value] = por;
    if (typeof value === "object" && Array.isArray(value)) {
      copyObject[key] = immutable([...value]);
    } else if (typeof value === "object" && !Array.isArray(value)) {
      copyObject[key] = immutable({ ...value });
    }
  });

  return copyObject;
};
