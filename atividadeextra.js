/*********************************************************************** 
    Lista de Exercícios – Lógica de Programação em JavaScript (Console)
 ***********************************************************************


1. Par ou Ímpar?
Escreva um programa que peça um número ao usuário e exiba no console se ele é par ou ímpar.


📌 Dica: Use o operador % para verificar o resto da divisão.
------------------------------------------------------------------------


2. Tabuada
Peça ao usuário um número e exiba no console a tabuada desse número de 1 a 10.


📌 Exemplo (se o número for 3):
3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30
------------------------------------------------------------------------


3. Fatorial de um Número
Solicite um número ao usuário e exiba no console o seu fatorial.


📌 Fatorial de 5: 5! = 5 × 4 × 3 × 2 × 1 = 120
------------------------------------------------------------------------


4. Soma dos Números de um Array
Crie um programa que tenha um array com números aleatórios e exiba no console a soma total desses números.


📌 Exemplo:
let numeros = [10, 20, 30, 40];  
// Saída: Soma = 100
------------------------------------------------------------------------


5. Ordenação de Números
Peça ao usuário para inserir vários números separados por vírgula. Depois, exiba os números ordenados de forma crescente no console.


📌 Exemplo:
Entrada: 8, 3, 5, 1, 9  
Saída: 1, 3, 5, 8, 9  FEITA/
------------------------------------------------------------------------


*/
//1function
const imparpar = (num) => {
  return num % 2 == 0 ? "é par, man" : "O número é impar";
};
console.log(imparpar(10));
console.log(imparpar(3));
console.log(imparpar(10));

console.log("----------------------------------------------------------------");
//2TABUADA

var tabuada = 5;
console.log(tabuada, "x 1 = ", tabuada * 1);
console.log(tabuada, "x 2 = ", tabuada * 2);
console.log(tabuada, "x 3 = ", tabuada * 3);
console.log(tabuada, "x 4 = ", tabuada * 4);
console.log(tabuada, "x 5 = ", tabuada * 5);
console.log(tabuada, "x 6 = ", tabuada * 6);
console.log(tabuada, "x 7 = ", tabuada * 7);
console.log(tabuada, "x 8 = ", tabuada * 8);
console.log(tabuada, "x 9 = ", tabuada * 9);
console.log(tabuada, "x 10 = ", tabuada * 10);

console.log("-----------------------------------------");

//3
console.log("Fatorial de 5! =", 5 * 4 * 3 * 2);

console.log("----------------------------------------------------------");

//4
var numeros = [10, 20, 30, 40];
var soma = numeros[0] + numeros[1] + numeros[2] + numeros[3];
console.log(soma);

console.log("-------------------------------------------------------");
//5-

const ordemNumero = [8, 3, 5, 1, 9];
console.log(ordemNumero);
console.log(ordemNumero.sort());

console.log(
  "========================================================Switch Case======================================================"
);
//VAR PROMPT
//*Estourando cartão versão while
//1 crie uma variavel e solicite o nome de uma pessoa NO NAVEGADOR
//2 crie uma variavel e solicite o nome de um banco
//3 crie uma variavel e solicite o numero de uma agencia
//4 crie uma variavel e solicite o numero da conta
//5 crie uma variavel e solicite ao usuario o saldo da conta
//6 exiba ao usuaario 5 movimentações na conta utilizando o laço while com valores aleatório
//7 exiba ao usuario novamente os dados e o saldo da conta
//


//var nome = prompt("Informe seu nome");
//var banco = prompt("Informe seu banco");
//var agencia = prompt("informeu sua agencia");
//var conta = prompt("Informe o número de sua conta");
//var saldo = prompt ("Informe seu saldo")
//console.log(`Olá ${nome}! Seu banco ${banco} Número da conta: ${conta} | seu saldo é ${saldo}`)

//var contador = 1;
//while (contador <= 5) {
  //console.log(contador);
//let gasto = Math.random()*100; //VALOR ALEATÓRIO ENTRE 0 E 99.999
//saldo -= gasto
  //contador++
//}
//console.log(saldo.toFixed(2)); //DEIXA O VALOR DECIMAL SOMENTE COM 2 CASAS

//console.log(`Olá ${nome}! Seu banco ${banco} Número da conta: ${conta} | seu saldo é ${saldo.toFixed(2)}`)

console.log("===================================================================================")
 // Jogo cara ou coroa, com 3 rodadas, usando DO-WHILE
console.log("--------------------------------------")
console.log("               PLACAR")
console.log("--------------------------------------")
console.log(`Vitórias ; variavelVitoria`);
console.log(`Derrotas: variaveisDerrotas`);
console.log("=====================================")

var cara = 0;
var coroa = 0;
var contador = 1;

do {
 cara = Math.random()*3 ;
 console.log("cara")
} while ());
