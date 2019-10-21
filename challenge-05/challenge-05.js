/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var serie = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 39, 41, 47];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function returnArray(array){
  return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(returnArray(serie)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function showArrayElement(array, index){
  
  if (!Array.isArray(array) || isNaN(index * 1)){
      return "Verifique se os elementos são um array e número.";
  }
  
  if (!Number.isInteger(index)){
    return "O índice deve receber um número inteiro.";
  }
  
  if (array[index] === undefined && index >= 0){
    return "O array nem tem tantos elementos... =(";
  }
  
  if (index < 0){
    return "O índice não pode ser negativo, cabeção!";
  }
  
  return array[index];
}

// showArrayElement(serie,0)
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var newArray = [undefined, 1, "Leandro", true, {marca: "LG", inches: 24, color: "branco"}]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

showArrayElement(newArray,0);
showArrayElement(newArray,1);
showArrayElement(newArray,2);
showArrayElement(newArray,3);
showArrayElement(newArray,4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(livro){
  
  var obj = {
   "Dom Quixote": 
    {quantidadePaginas: 159,
     autor: "Miguel de Cervantes",
     editora: "Png Cia"},
      
   "O Senhor dos Anéis":
    {quantidadePaginas: 258,
     autor: "J.R.R. Tolkien",
     editora: "Harper Collins"},
      
   "O Pequeno Príncipe":
    {quantidadePaginas: 258,
     autor: "Antoine de Saint-Exupéry",
     editora: "Agir"}
  }
  
  return !livro ? obj : obj[livro];
    
}


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nome = "O Pequeno Príncipe";
console.log("O livro " + nome + " tem " + book(nome).quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var nome2 = "Dom Quixote";
console.log("O autor do livro " + nome2 + " é " + book(nome2).autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var nome3 =  "O Senhor dos Anéis";
console.log("O autor do livro " + nome3 + " é " + book(nome3).autor + ".");

