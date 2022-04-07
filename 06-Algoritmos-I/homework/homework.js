'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var newArray = [1]
  let i = 2                         //para factoriar hay que multiplicar por 2 
  while (num !== 1) {
     if (num % i === 0) {
       newArray.push(i)
       num = num / i
     }else {
       i++
     }
  }
  return newArray
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // var len = array.length;
    
  //     for (var i = 0; i < len -1; i++) {
  //       for(var j = 0 ; j < len - i ; j++){ 
  //         if (array[j] > array[j + 1]) {
  //         var temp = array[j];
  //         array[j] = array[j+1];
  //         array[j + 1] = temp;
  //       }
  //      }
  //     }
  //     return array;

  let flag = true
  while(flag) {
    flag = false
    for (let i = 0; i < array.length-1; i++){
      if (array[i] > array[i + 1]) {
                var temp = array[i];
                array[i] = array[i+1];
                array[i+ 1] = temp;
                flag = true
    }
  }
}
return array
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
 
  for (let i = 1; i < array.length; i++) {
    let auxiliar = array[i]
    for( let j = 0; j < i; j++) {
      if( auxiliar < array[j]){
        auxiliar = array[j]
        array[j] = array[i]
        array[i] = auxiliar
      }
    }
  }
  return array
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 0; i < array.length; i++) {
    let min = array[i]
    let current = i
    for( let j = i+1; j < array.length; j++) {
      if(min > array[j]) {
        min = array[j]
        current = j

      }
    }
    if (current !== i) {
      array[current] = array[i]
      array[i] = min
    }
  }
return array
// for(let j = 0; j < array.length-1 ; j++) {
//   let min = j
//   for( let i = j+1; i < array.length; i++) {
//     if( array[i] < array[min]) {
//       min = 1
//     }
//     if(j!==min) {
//       let auxiliar = array[j]
//       array[j] = array[min]
//       array[min] = auxiliar
//     }
//    }
//    return array
// }

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
