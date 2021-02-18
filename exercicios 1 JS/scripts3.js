//Criador de pensamentos
let subject = 'Create video'

function createThink(subject){
    subject = 'I need Study'
    return subject 
}

console.log(createThink(subject))
console.log(subject)

/* A variavel subject continua com o valor inicial "Create Video".Quando é chamada
a função o parametro subject recebe o valor "I need Study". Portanto, a variavel e o 
parametro são diferentes apesar de rceberem o mesmo nome */

function createThink(){
    subject = 'I need Study'
    return subject 
}

console.log(createThink())
console.log(subject)

/* Nesse caso, não há mais o parametro, portanto o valor da variavel é substituido */
