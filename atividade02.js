var nome = "Erick";
var ano = 2008;

console.log(nome, "nasceu em:", ano);
var idade = 2025 - ano;
// console.log("Idade atual:", idade);

console.log(nome, "tem", idade, "anos");

console.log("--------------------------====--------------------");

var base = 12;
var altura = 6;
var area = base * altura;

console.log(
  "A area do retangulo de base",
  base,
  "e altura",
  altura,
  "é:",
  area
);

//

var profundidade = 5;
var volume = area * profundidade;
console.log("O volume do retangulo é:", volume);

console.log("---------------------------------------------------");

var a = 2;
var b = 3;
var c = -1;
var delta = b ** 2 - 4 * a * c;
console.log("O valor de delta é:", delta);


console.log("---------------------------------------------------");

var compra = 450;
var desconto = 0.03; // IGUAL A VAR DESCONTO = 3/100
desconto = compra * desconto;
var total = compra - desconto
console.log("Compra: R$", compra, " - Desconto R$", desconto, " = total:", total);

console.log("=======================================================");
 
var tempo = 3.5;
var velocidade = 95;
var distancia = tempo * velocidade;
console.log("A distancia percorrida é de:", distancia,"Km");
