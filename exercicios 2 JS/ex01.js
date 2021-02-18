/* Transformar notas escolares

Crie um algoritimo que transforme as notas do sistema númerico
paras sitema de notas em caracteres A B C

* de 90 para cima -> A
* entre 80 - 89 -> B
* entre 70 - 79 -> C
* entre 60 - 69 -> D
* menor que 60

*/

function getScore(nota){
    if(nota >= 90 && nota<=100) {
        nota = String('A')
    } else if(80 <= nota && nota < 90) {
        nota = String('B')
    } else if(70 <= nota && nota < 80) {
        nota = String('C')
    } else if(60 <= nota && nota < 70) {
        nota = String('D')
    } else if(nota < 60 && nota >=0) {
        nota = String('F')
    } else  {
        nota = "Nota Inválida"
    }
    console.log(nota)
}

getScore(100)
getScore(90)
getScore(80)
getScore(70)
getScore(60)
getScore(20)
getScore(-10)
