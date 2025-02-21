//LAÇO DE REPETIÇÃO - FOR

//o professor te botou de castigo e pediu pra voce escrever mil vezes "eu vou prestar atenção ás aulas"

for (let i = 0; i < 1000; i++) {
  console.log("Eu vou prestar atenção ás aulas!");
}

//ESCREVA TODOS OS NUMEROS DE 1 A 20 COM LOOP FOR

for (let i = 0; i <= 20; i++) {
  console.log(i);
}
console.log("========================================");

//MOSTRE NO CONSOLE DO SISTEMA OS NUMEROS PARES ENTRE 1 E 20

for (let i = 0; i <= 20; i++) {
  i % 2 == 0 && console.log(i);
}

//exercicio
//DADO UM VETOR, CALCULE E EXIBA O SOMATORIO DE SEUS ELEMENTOS
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
console.log(numeros.length);
var soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log("A soma dos elementos:", soma);

//DADO UM VETOR, CALCULE E EXIBA A QUANTIDADE DE PARES E IMPARES
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
var pares = 0;
var impares = 0;

for (let i = 0; i < numeros.length; i++) {
  numeros[i] % 2 == 0 ? pares++ : impares++;
}
console.log("Total de pares:", pares);
console.log("Total de impares:", impares);

console.log("-------------------------------------------------------------");
//MULTIPLIQUE OS ELEMENTOS POR 3
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
console.table(numeros);

for (let i = 0; i < numeros.length; i++) {
  numeros[i] *= 3; //numeros [i] = numeros[i] *3
}
console.log(numeros);

console.log("=========================================================");
//Dada uma matriz 2x3, mostre ao usuário todos os seus elementos com as respectativas posições
//var matriz = [[8, 4, 1],[(3, 7, 8)], ];

//console.table(matriz);

var matriz = [
  [8, 4, 1],
  [3, 7, 8],
];
for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
// console.log("Matriz[", linha, "][", coluna, "] =", matriz[linha][coluna]);
     console.log(`Matriz [${linha}][${coluna}] = ${matriz[linha][coluna]}`);
  }
}
console.log("Matriz [linha 0 coluna 0] =", matriz[0][0]);


console.log("======================================================================")