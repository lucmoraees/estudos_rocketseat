//Arrow function
const sayMyName = (name) => {
    console.log(name)
}

sayMyName("Lucas")

//CallBack function
const sayMyAge = function(age) {
    age()
}

sayMyAge(
    () => {
        console.log(20)
    }
)

/* 
Ao executar a função sayMyAge, o codigo chama a 
função de volta para poder criar a função age para
ser executada dentro da função sayMyAge
*/

//Function Constructor
function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    } 
}
const Lucas = new Person("Lucas")
const Carol = new Person("Carol")
console.log(Lucas)
console.log(Carol)

function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
    this.Marca = marcaCelular,
    this.Tela = tamanhoTela,
    this.Bateria = capacidadeBateria,
    this.ligar = function ligar() {
        console.log('Fazendo ligação....')
    }
}

const samsumgA51 = new Celular("Samsumg", 7.0, 6500)
const samsumgNote10 = new Celular("Iphone", 6.5, 6000)
const Iphone8Plus = new Celular("Samsumg", 8.0, 7000) 
console.log(samsumgA51)
console.log(samsumgA51)
console.log(Iphone8Plus)


/*
A função construtora começa sempre com a primeira letra em maiuscula,
ela vai receber parametros e o this vai puxar a variavel samsumgA51 de modo a criar um objeto 
com as especificações escolhidas. Ex this.marca = marcaCelular, a marca vai receber 
o parametro marcaCelular.
O new serve para a função entender que está sendo chamada uma função construtora 
Dessa forma todas as informações serão armazenadas no objeto samsumgA51
*/