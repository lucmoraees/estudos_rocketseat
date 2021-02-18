// For

for(let i = 0; i <= 10; i++) {
    if(i == 2){
        continue
    } else if(i == 7){
        break;
    } else {
        console.log(i)
    }
}

//while
console.log('while')
let i = 1
while(i <= 10) {
    console.log(i)
    i++
}

// for  of
name = 'Lucas'
names = ['Lucas', 'Matheus', 'Carol']
for(let letra of name){
    console.log(letra)
}

// for in
let person = {
    nome: 'Lucas',
    sobrenome: 'Moreas',
    age: 20,
    sexo: 'Maculino'
}

for(let propriedade in person){
    console.log(`${propriedade}: ${person[propriedade]}`)
}