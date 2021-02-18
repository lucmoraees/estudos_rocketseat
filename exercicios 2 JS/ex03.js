/* ### Celsius em Fahrenheit

Crie uma função que receba uma string em celsius ou Fahrenheit 
e faça a transformação de uma para outra 

C = (F - 32) * 5/9
F = C * 9/5 + 32
*/

// 1 Modo 
function conversao(unidade, temp){
    const celsiusExist = unidade.toUpperCase().includes('C')
    const fahrenheitExist = unidade.toUpperCase().includes('F')

    if (fahrenheitExist == true && celsiusExist == false) {
        var C = (temp - 32) * 5/9
        console.log(`A conversão de ${temp}F° é ${C.toFixed(2)}C°`)
    } else if (celsiusExist == true && fahrenheitExist == false){
        var F = temp * 9/5 + 32
        console.log(`A conversão de ${temp}C° é ${F.toFixed(2)}F°`)
    } else{
        throw new Error('Digite uma unidade válida')
    } 
}

try{
    conversao('F', 50)
} catch (erro){
    console.log(erro)
}

// 2 modo
function transformDegree(degree){
    const celsiusExist = degree.toUpperCase().includes('C')
    const fahrenheitExist = degree.toUpperCase().includes('F')
    
    //Verificação da unidade 
    if (!celsiusExist && !fahrenheitExist){
        throw new Error('Digite uma unidade válida')
    } 

    // Transformando F -> C 
    let updatedDegree = Number(degree.toUpperCase().replace('F', ''))
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    // Transformando C -> F
    if(celsiusExist){
        updatedDegree = Number(degree.toUpperCase().replace('C', ''))
        formula = (celsius) => celsius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula(updatedDegree) + degreeSign
}

try{
   console.log(transformDegree('10C'))
} catch (erro){
    console.log(erro)
}