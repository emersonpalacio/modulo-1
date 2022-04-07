'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function Node(value) {
  this.value = value
  this.next = null
}

function LinkedList() {
  this.head = null
  this._length = 0
}

LinkedList.prototype.add = function(value) {
  var node = new Node(value)
  var current = this.head
  if (!current) {
    this.head = node
    
    return node
  }
  while (current.next !== null) {
    current = current.next
    }
  current.next = node
  
  return node
}

LinkedList.prototype.remove = function() {
 let current = this.head
let eliminado 
 if(!current) null
 else if(current && current.next) {
  let eliminado = current.value
  this.head = null
  this._length--
  return eliminado
 }

while (current.next.next) {
  current = current.next
}

eliminado = current.next.value
current.next = null
this._length--
 return eliminado
}

LinkedList.prototype.search = function(arg) {
var current = this.head
if(!current) return null
while(current) {
  if(current.value === arg) return current.value

 else if(typeof arg === "function") {
   if(arg(current.value)) return current.value
   
 }
  current = current.next

}
return null
}

// function LinkedList() {
//      this.head = null;
//      this._length = 0
// }

// function Node(value){
//    this.value = value,
//    this.next = null
// }

// LinkedList.prototype.add = function(value) {
//   var newNode = new Node(value)

//   var current = this.head

//   if(!current) {
//     this.head = newNode

//     this._length++

//   } 
//    else
   
//     {while(current.next) {
//     current = current.next
//   } current.next = newNode
//   this._length++
//   }
// }

// LinkedList.prototype.remove = function() {
//   if(!this.head) return null
//   if(!this.head.next) {
    
//      this.head = null

//     this._length--

//     let t = this.head.value

//     this.head = null

//     return t
//   }
//    else
//       {

//     var current = this.head
//     while(current.next.next){
//       current = current.next
//     }
//     let temporal = current.next.value
//     current.next = null
//     return temporal

//   }
// }

// LinkedList.prototype.search = function(value) {
  
// }
// var lista = new LinkedList()

// lista.add(1)
// lista.add(2)
// // lista.add(3)
// // lista.add(4)
// lista.remove()
// console.log(lista)
// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
this.buckets = []
this.numbersBuckets = 35
 }
   HashTable.prototype.hash = function(key) {
let sum = 0
for(var i= 0; i < key.length; i++) {
  sum += key.charCodeAt(i)
}
return sum % this.numbersBuckets
   }

    HashTable.prototype.set = function(key, value){
      let index = this.hash(key)
      if(typeof key !== "string") throw new TypeError("key must be a string")
      if(!this.buckets[index]) {
        this.buckets[index] = {}
        this.buckets[index][key] = value
      }
    }

   HashTable.prototype.get = function(key){
    let index = this.hash(key)
    return this.buckets[index][key]
   }

   HashTable.prototype.haskey = function(key) {
     let index = this.hash(key)
     return this.buckets[index].hasOwnProperty(key)
   }


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
