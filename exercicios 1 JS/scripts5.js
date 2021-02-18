//ProtoType

let number = 123
let str = "Ola Mundo"

console.log(str.length)
console.log(String(number).length)
console.log(str.toUpperCase())
console.log(str.includes("Ola" | "Mundo"))

let txt = "Eu quero estudar Java Script"
let myArray = txt.split(" ")
console.log(myArray)
let txtWithUnderScore = myArray.join("_")
console.log(txtWithUnderScore)

let array = new Array(5)
array.push(3)
array.push(6)
array.push(2)
array.push(4)
array.shift()
array.push(8)
array.push(0)
array.unshift(9)
array.slice(0, 2)
console.log(array)
let positionArray = array.indexOf(6)
console.log(positionArray) 

// Para remover do array qualquer elemento
let index = array.indexOf(6)
array.splice(index, 1)
console.log(array)