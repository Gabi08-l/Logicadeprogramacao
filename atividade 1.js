// /*****************************************************
// Exercícios para fixação

/* 
1. Crie uma variável e atribua o nome de uma pessoa; 
2. Crie uma variável e atribua o nome de um banco; 
3. Crie uma variável e atribua o número da agência; 
4. Crie uma variável e atribua o número da conta; 
5. Crie uma variável e atribua o saldo da conta; 
6. Imprima os dados e o saldo da conta; 
7. Efetue e imprima 5 movimentações na conta; 
8. Imprima novamente os dados e o saldo da conta;
*/

let nome = "gabi";

let banco = "Itau";

let agencia = 7687;

let conta = "12345-9";

let saldo = 1400;
console.log("***************************",banco,"**************************");
console.log("cliente:", nome);
console.log("Agencia:", agencia, "| Conta:", conta);
console.log("Seu saldo é de R$:", saldo);

console.log("    + Depósito R$78,00");
saldo = saldo+78;

console.log("    + Depósito R$10,00");
saldo = saldo+10;

console.log("    + Saque R$78,00");
saldo = saldo-78;

console.log("    + Depósito R$100,00");
saldo = saldo+100;

console.log("    + Saque R$50,00");
saldo = saldo-50;

console.log("***************************",banco,"**************************");
console.log("cliente:", nome);
console.log("Agencia:", agencia, "| Conta:", conta);
console.log("Seu saldo é de R$:", saldo);