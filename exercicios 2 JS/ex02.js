/* Sistema de Gasto Familiar 

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

Agora crie uma função que irá calcular o total de receitas e despesas 
e irá mostrar uma menssagem se a família está com saldo positivo ou 
negativo, seguindo o valor do saldo.  
*/

let gastoFamiliar = {
    receitas: [300, 400, 500, 1238, 890732],
    despesas: [1234, 6534, 1234]
}

function sum(array){
    let total = 0;
    for(let value of array) {
        total += value;    
    } 
    return total
}

function saldo(gastoFamiliar) {
    const calculoReceitas = sum(gastoFamiliar.receitas) 
    const calculoDespesas = sum(gastoFamiliar.despesas)
    const saldo = calculoReceitas - calculoDespesas
    
    let text = 'negativo'
    if (saldo >= 0){
        text = 'positivo'
    }
    console.log(`O saldo está ${text}`)
    console.log(`Seu saldo é: ${saldo}`)
} 

saldo(gastoFamiliar)
