/* 
### Buscando e Encontrando dados em arrays

Baseado no Array de Livros por Categoria abaixo, faça os 
seguintes desafios:
    a) Contar o números de categorias e de livros por categoria 
    b) Contar o número de autores 
    c) Mostrar os livros do Auguso Curry
    d) Transformar o item c em uma função que recebe o nome do 
    autor e retorna os livros escritos por ele
*/

const booksByCategory = [
    {
        categoria: "Riquezas",
        livros: [
            {
                titulo: "Os segredos da mente milionaria",
                autor: "T. Harv Eker",
            },
            {
                titulo: "O homem mais rico da Babilonia",
                autor: "George S. Clason",
            },
            {
                titulo: "Pai rico, pai pobre",
                autor: "Robert T. Kyozaki e Sharon L. Lechter",
            },
        ],
    },
    {
        categoria: "Inteligencia Emocional",
        livros: [
            {
                titulo: "Você é insubstituivel",
                autor: "Augusto Cury",
            },
            {
                titulo: "Ansiedade - Como enfrentar o mal do século",
                autor: "Augusto Cury",
            },
            {
                titulo: "Os sete habitos das pessoas altamente eficazes",
                autor: "Stephen R. Covey",
            },
        ],
    },
];

// a)
const numCategorias = booksByCategory.length
console.log(`Estão cadastradas ${numCategorias} categorias`)
for(let categoria of booksByCategory){ // Acessa os objetos dentro do array booksByCategory
    var numLivros = categoria.livros.length // Acessa os objetos e filtra para os livros
    console.log(`Estão cadastrados ${numLivros} livros na categoria ${categoria.categoria}`)
}

// b)
function contAutores() {
    let autores = [];
    for(let categoria of booksByCategory){
        for( let livro of categoria.livros) {
            if (autores.indexOf(livro.autor) == -1) { // -1 indica que o autor nao foi encontrado no array
                autores.push(livro.autor)
            } 
        }
    }
    let numAutores = autores.length 
    console.log(`Ao todo foram cadastrados ${numAutores} autores`)
}

contAutores()

// c)
function livrosAugustoCurry() {
    let livrosAC = [];
    for(let categoria of booksByCategory){
        for( let livro of categoria.livros) {
            if (livro.autor == "Augusto Cury") {
                livrosAC.push(livro.titulo)
            }
        }
    }
    let numLivrosAC = livrosAC.length 
    console.log(`Ao todo foram cadastrados ${numLivrosAC} livros do Augusto Cury`)
}

livrosAugustoCurry()

// d)
function booksByauthor(nomeAutor){
    let livrosPorAutor = []
    for(let categoria of booksByCategory) {
        for(livro of categoria.livros) {
            if (nomeAutor == livro.autor) {
                livrosPorAutor.push(livro.titulo)
            }
        }
    }
    let numLivros = livrosPorAutor.length
    console.log(`Ao todo foram cadastrados ${numLivros} livros do ${nomeAutor}`)
    console.log(`Livros do autor: ${livrosPorAutor.join(", ")}`)
}
 booksByauthor('George S. Clason')
