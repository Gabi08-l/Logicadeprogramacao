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

console.log(
  "=================================//Laço repetição /  While e Do While====================================="
);
//Laço repetição /  While e Do While
//While -> testa a condição de entrar no laço de repetição. Se a condição for inicialmente falsa,
//o laço não é executado nenhuma vez.
//WHILE
var t = 10;
while (t >= 10) {
  //>= ->
  console.log("Entrei no laço While...");
  t = 0;
}
console.log("Terminei!");

//EXEMPLO DE WHILE COM ESCRITA DE 1000 LINHAS
var i = 0;
while (i < 100) {
  console.log(`Escrita de linha ${1}`);
  i++;
}
//Laço repetição while
//
//While (condição) {
//fragmentos de codigo
//fragmentos de codigo
//fragmentos de codigo
//fragmentos de codigo
//contador ++| nesta parte o contador é a variavel de controle de acesso = i|
//}

//exemplo funciona somente no nav
//var senhaCorreta = "1234";
//var tentativa = prompt ("Digite a senha");

//while (tentativa !== senhaCorreta) {
//tentativa = prompt ("Digite a senha:");
//}

//console.log("Acesso concedido!");

//DO WHILE testa a condição somente no final do laço de repetição
//sendo assim,qualquer que seja a condição, o laço é executado pelo menos uma vez.
//testar antes depois fazer
console.log("=======================================")
var x = 10;

do {
  console.log("Entrei no laço Do-While...");
  x = 0;
} while (x > 10);

console.log("Terminei!"); //esse testa até tal requisito não ser mais comprido, no caso,
//ele faz até o x ser "maior" que 10.
//No while ele não faz até o reuisito ser cumprido