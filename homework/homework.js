// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  var mayus = nombre.charAt(0).toUpperCase() + nombre.slice(1);
  return mayus
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  return cb()
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1,n2)
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  // usa reduce o numero of numeros
  //var sumas = 0
  //for(var i = 0; i < numeros.length; i ++){
   // sumas = sumas + numeros[i]
  //} 
  //cb(sumas)
  //var suma = 0
  //for(numero of numeros) {
    //suma = suma + numero
  //}
  //cb(suma)
  var suma = numeros.reduce(function(valuno,valdos){
    return valuno + valdos
  }) 
  cb(suma)
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
 //  for(numero of array) cb(numero)
 ///for(var i = 0; i < array.length; i++){
  //return cb(array[i])
 //} 
 array.forEach(function(valor){
  return cb(valor)
 })
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y 
  //luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
 
  var newarry = array.map(function(valor){
    return cb(valor)
  })
if(newarry.length === array.length){
  return newarry
} 

 

}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var newarry = array.filter(function(element){
    return (element[0] === "a")
  })
return newarry
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
