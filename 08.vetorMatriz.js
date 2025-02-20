// CRIANDO VARIAVEIS DO TIPO array (VETOR)
//var numeros = [1, 2, 3, 4, 5];
//console.log(numeros); // imprimindo os dados do array
//console.table(numeros); //imprimindo os dados em forma de tabela
//console.log(numeros[1]); ////imprimindo o item de indice 1
//console.log("O vetor tem:", numeros.length, "elementos.");

var dinos = [
  "Tiranossauro Rex",
  "Estegossauro",
  "Anquilossauro",
  "Titanossauro",
];
console.log(dinos); //imprimindo os dados
console.table(dinos); //imprimindo os dados em forma de tabela
console.log("O vetor dinos tem:", dinos.length, "elementos");

//Adicionando elementos a um vetor existente
dinos.push("Brontossauro");
console.table(dinos);
console.log("O vetor dinos tem:", dinos.length, "elementos");

dinos.unshift("Tricerátops");
console.table(dinos); //imprimindo os dados em forma de tabela
console.log("O vetor dinos tem:", dinos.length, "elementos");

//Obtendo um elemento com base em seu indice (posição)
console.log("1ª posição", dinos[0]);
console.log("3ª posição", dinos[2]);
console.log("20ª posição", dinos[19]); //quando não temos o item, apresenta um erro (undefined)

//alterando elementos com base em seu indice posição
dinos[3] = "Velociraptor";
console.table(dinos);

//removendo elementos do vetor
var dinos = [
  "Triceratops",
  "Tiranossauro Rex",
  "Estegossauro",
  "Anquilossauro",
  "Brontossauro",
];
console.table(dinos);
dinos.pop(); //removendo o ultimo do array (vetor)
console.table(dinos);

dinos.shift();
console.table(dinos); //remove o elemento de indice 1

dinos.splice(1, 1); //remove o elemento de indice 1 ( a partir da posição 1, exclui 1 elemento)
console.table(dinos);

var dinos = [
  "Triceratops",
  "Tiranossauros Rex",
  "Estegossauro",
  "Anquilossauro",
  "Brontossauro",
  "Ictiossauro",
  "Pterodáctilo",
  "Espinossauro",
];
console.table(dinos);

var elementoProcurado = "Pterodáctilo";
var posicao = dinos.indexOf(elementoProcurado);
console.log(elementoProcurado, "esta no indice:", posicao);

elementoProcurado = "Estegossauro";
posicao = dinos.indexOf(elementoProcurado);
console.log(elementoProcurado, "está no indice:", posicao);

elementoProcurado = "Castellossauro";
posicao = dinos.indexOf(elementoProcurado);
console.log(elementoProcurado, "esta no indice", posicao);
console.log(
  "indexOf = -1 significa que o elemento não foi encontrado no vetor!"
);

//EXCLUINDO UM ELEMENTO COM BASE NO SEU NOME
var elementoExcluir = "Pterodáctilo";
var posicao = dinos.indexOf(elementoExcluir);
dinos.splice(posicao, 1);
console.table(dinos);

//CRIANDO UMA COPIA DE UM ARRAY/VETOR
var copia = dinos.slice();
console.log("Copiando um vetor!");
console.table(copia);

//CRIANDO ARRAY NUMERICO
var numeros = [4, 3, 1, 9, 7, 2];
console.table(numeros);

//imprimindo os elementos das posições impares
console.log(numeros[1]);
console.log(numeros[3]);
console.log(numeros[5]);

//verificando se o array contem um item
console.log("contem 9:", numeros.includes(9));
var contem0 = numeros.includes(0);
console.log("Contem 0:", contem0);

//ORDENANDO OS ELEMENTOS DO VETOR
numeros.sort();
console.table(numeros);

//INVERTENDOA ORDEM OU POSIÇÃO DOS ITENS
numeros.reverse();
console.table(numeros);

//ALTERANDO O VALOR DE UM ELEMENTO COM BASE EM SUA POSIÇÃO
numeros[2] = 5;
console.table(numeros);

numeros[0] += 3;
console.table(numeros);
numeros[5] = numeros[0] + numeros[1];
console.table(numeros);

//CRIANDO ARRAYS HIBRIDOS
var hibrido = [10, "pafuncio", 3.45, "zuleika", 7];
console.table(hibrido);

hibrido[1] = 9;
console.table(hibrido);

hibrido[0] = "tiburcio";
console.table(hibrido);

//CRIANDO UMA MATRIZ
var matriz = [
  [9, 0, 1],
  [7, 1, 2],
  [1, 3, 9],
];
console.table(matriz);

//OBTENDO ELEMENTO COM BASE EM SEUS INDICES
console.log("Matriz [1,2] =", matriz[1][2]);
console.log("Matriz [2,0] =", matriz[2][0]);

//ALTERANDO O VALOR DE ELEMENTOS COM BASE EM SEUS INDICES
matriz[1][2] = 20;
matriz[2][0] = 30;
console.table(matriz);
