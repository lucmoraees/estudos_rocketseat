// Switch

function calculadora(num1, num2, operador) {
    let result

    switch (operador) {
        case '+':
            result = num1 + num2
            break
        case '-':
            result = num1 - num2
            break
        case '*':
            result = num1 * num2
            break
        case '/':
            result = num1 / num2
            break
        default:
            console.log("Não implementado")
            break
    }

    return result
}

let num1 = 6
let num2 = 9
let operador = '+'
console.log(calculadora(num1, num2, operador))