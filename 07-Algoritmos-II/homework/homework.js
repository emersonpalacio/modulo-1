'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1){
    return array
  }

  //var pivot = Math.round((array.length-1)*Math.random()) // * si aca cambio el pivot = array[0]*
  var pivot = array [0]
  var right = []
  var middle = []
  var left = []
  
  for (let i = 0; i < array.length; i++) {
    if(array[i] < pivot) {              //* aca deberia sacarel array[] y dejar solo el pivot*
      left.push(array[i])
    }else  
      if(array[i] === pivot){           // aca tambien
      middle.push(array[i])
      }
     else if(array[i] >pivot) {        // aca tambien
       right.push(array[i])
     }
  
  }
 
return quickSort(left).concat(middle).concat(quickSort(right))
}



function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetroe
  // Devolver el array ordenado resultante
  // Tu código:
   if (array.length === 1) return array
 let half = Math.floor((array.length-1)*Math.random())
 let left = array.slice(0, half)
 let right = array.slice(half)

return merge(mergeSort(left), mergeSort(right))

function merge(left, right) {
 let result = []
 let indexleft = 0
 let indexright = 0
 while(indexleft < left.length && indexright < right.length) {
   if(left[indexleft] < right[indexright]) {
     result.push(left[indexleft])
     indexleft++
   }else {
     result.push(right[indexright])
     indexright++
   }
 }
 return array.concat(left.silce(indexleft).concat(right.silce(indexright)))
}

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
