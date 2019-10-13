# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function soma(x,y) {
return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

var soma5 = soma(2,3) + 5;

// Qual o valor atualizado dessa variável?

soma5;

// Declare uma nova variável, sem valor.

var nada;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function mudavalor(z){
nada = z;
return "O valor da variável agora é "+z+"."
}

// Invoque a função criada acima.
mudavalor(1);

// Qual o retorno da função? (Use comentários de bloco).

/* o retorno da função mudavalor é uma string,
informando qual o novo valor na variável nada atribuída pelo argumento z da função.
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function multiplica(a,b,c){
if (a === undefined || b === undefined || c === undefined) {
return "Preencha todos os valores corretamente!";
} else {
return (a*b*c + 2);
}
}

// Invoque a função criada acima, passando só dois números como argumento.

multiplica(1,2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

// O resultado da função acima mostra que se todos os argumentos não forem informados a função multiplica retorna NaN

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

multiplica(1,2,3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

// resultado da função é a multiplicação dos três valores informados somando 2 ao resultado. Caso não sejam informados três valores, ou os valores não sejam numéricos, o resultado retornado é NaN.

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function resultado(x,y,z,w) {

var total = false;

if (x !== undefined) {
total = x;
}

if (y !== undefined) {
total += y;
}

if(z !== undefined) {
total /= z;
}

if (w !== undefined) {
total = null;
}

return total;
}


// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

resultado(1);
// Quando a função recebe um argumento, ela retorna o próprio argumento.

resultado (1,2);
// Quando a função recebe dois argumentos, ela retorna a soma entre eles.

resultado (1,2,3);
// Quando a função recebe três argumentos, ela retorna a soma entre os dois primeiros, dividido pelo terceiro.

resultado (1,2,3,4);
// Quando a função recebe quatro argumentos ou mais, ela retorna "null".

resultado();
// Quando a função não recebe argumentos, ela retorna "false".


```
