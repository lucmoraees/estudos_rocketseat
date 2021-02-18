// Throw Try Catch

function sayMyName(name) {
    if(name === "") {
        throw new Error('É necessário escrever um nome')
    } else {
        return name
    }
}

try {
    sayMyName()
} catch(erro) {
    console.log(erro)
}

var nome = 'Lucas'
console.log(sayMyName(nome))
var nome = ''
console.log(sayMyName(nome))