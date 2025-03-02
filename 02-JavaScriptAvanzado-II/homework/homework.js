"use strict";

function counter() {
  // Retorna una funcion que cuando sea invocada retorne un valor creciente.
  // el primer valor deberia ser 1.
  // Vas a tener que usar closures.
  // ejemplo: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2

  //   let i = 1
  //   return function (){
  //   return i++
  //   }
  // }

  let creciente = 1;
  return function () {
    return creciente++;
  };
}

function cacheFunction(cb) {
  // Usa closures para crear un caché para la función cb.
  // la función que retornas debe aceptar un solo argumento e invocar a cb con ese argumento
  // cuando la función que hayas retornado es invocada de nuevo, debería guardar el argumento y el resultado de la invocacion
  // cuando la función que retornaste sea invocada de nuevo con un argumento con el cual se había invocado anterioremente, no
  // deberia invocar de nuevo a cb
  // debería retornar el resultado (previamente guardado)
  // Ejemplo:
  // cb -> function(x) { return x * x; }
  // si invocas la function que retornaste con 5, adentro deberia invocar cb(5) y retornar 25.
  // si la invocas de nuevo con 5, deberia retornar 25 (guardado previament en el cache)
  // Tips, usá un objeto donde cada propiedad sea un argumento, y el valor el resultado.
  // usá hasOwnProperty!

  var nuevo = {}; //creo un nuevo array

  function fncall(propiedad) {
    //una funcion que recibe una propiedad como parametro
    //
    if (nuevo.hasOwnProperty(propiedad)) {
      //aca pregunta si esa propiedad, esta o no en el objeto creado
      return nuevo[propiedad]; //SI tiene la propiedad de arriba, retorna al objeto creado arriba, una propiedad(añade lo recibido por parametro)
    }
    nuevo[propiedad] = cb(propiedad); // y si no, asigna la propiedad, al nuevo objeto, retornandolo en la variable
    return nuevo[propiedad];
  }
  return fncall; // retorno la variable donde guarde cada propiedad.
}

// Bind

var instructor = {
  nombre: "Franco",
  edad: 25,
};

var alumno = {
  nombre: "Juan",
  curso: "FullStack",
};

function getNombre() {
  return this.nombre;
}
// Escribir código, sin modificar lo que ya se encuentra escrito arriba, para poder llamar al método
//getNombre para obtener primero el nombre del instructor y luego para obtener el nombre del alumno.
// Modificar los undefined por el código correspondiente en cada caso
// Pista, tenes que bindear el this!
let getNombreInstructor = getNombre.bind(instructor); //crea una copia de la funcion getnombre, en una nueva variable, y
//  busca en el objeto instructor lo que esa funcion retorne adentro

let getNombreAlumno = getNombre.bind(alumno); // los mismo  en este caso

/*Guardar en las siguientes tres variables una función que devuelva una cadena utilizando la función "crearCadena"
y el delimitador especificado. La idea es realizarlo con la función bind para poder volver a utilizarlo múltiples veces
luego:

1. textoAsteriscosz
2. textoGuiones
3. textoUnderscore

Esto nos va a permitir llamar por ejemplo al método "textoAsteriscos" únicamente pasándole
 un argumento en vez de los tres que recibe "crearCadena"
*/
function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
  return delimitadorIzquierda + cadena + delimitadorDerecha;
}

// Modificar los undefined por el código correspondiente en cada caso
// Pista, tenes que usar bind para "bindear" algunos parámetros de la función crearCadena.

let textoAsteriscos = crearCadena.bind(this, "*", "*"); //en este caso, el this hace referencia al objeto global, por eso se utiliza el this y no el objeto
// como primer parametro
let textoGuiones = crearCadena.bind(this, "-", "-"); // idem

let textoUnderscore = crearCadena.bind(this, "_", "_"); // idem

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
  getNombreInstructor,
  getNombreAlumno,
  textoAsteriscos,
  textoGuiones,
  textoUnderscore,
};
