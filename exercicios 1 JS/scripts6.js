// Operadores Condicionais

//Breaksfast
let pao = true
let queijo = false
let cafe = true

let breakfast = cafe && pao || cafe && queijo ? "Ótimo café da manhã" : "Péssimo café da manhã" 
console.log(breakfast)

//Maior de 18
let age = 12
let canDrive = age >= 18 ? "Pode dirigir" : "Não pode dirigir"
console.log(canDrive)
