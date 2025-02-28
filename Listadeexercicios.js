//1
let x = 5;
let y = 2;
let z = 3;

console.log("x =", x, "\ny =", y, "\n z =", z); //TINHA QUE SER FEITO NA `` !!!!

let somar = x + y + z;
console.log(`a soma de x + y + z é:, ${somar}`);

let sub = x - y - z;
console.log(`a subtração de x - y - z é: ${sub}`);

let multi = x * y * z;
console.log(`a multiplicação de x * y * z é: ${multi}`);

let divisao = x / y / z;
console.log("a divisão de x / y / z é:", divisao);

console.log("=======================================");
//2

var a = 7;
var b = 5;
var c = 10;

var media = (a + b + c) / 3;
console.log(Math.round(media));

var media = 7.3;
var resultado = media <= 7 ? `Reprovado!` : `Aprovado!`;
console.log(Math.round(media) < 7 ? `Reprovado!` : `Aprovado!`);

//3
var salarioBruto = 3000;
salarioBruto -= (salarioBruto * 13) / 100;
console.log(`O salário líquido é ${salarioBruto}`);

console.log(
  "================================================================================="
);

//4
Math.PI;
var raio = 7;
console.log(
  "Comprimento de uma circuferencia de raio",
  raio,
  "cm:",
  (2 * Math.PI * raio).toFixed(2)
);
console.log("Area do circulo é:", (Math.PI * Math.pow(raio, 2)).toFixed(2));

console.log("_________----------------------------------___________________");

//5
// var preco = 3000;
// var desconto1 = 0.05;
// desconto1 = preco * desconto1;
// preco -= desconto1;
// console.log(`Dois produtos, Preço: R$ ${preco} -desconto = $desconto1}`);

// var preco2 = 4500;
// var desconto2 = 0.1;
// desconto2 = preco * desconto2;
// preco -= desconto2;
// console.log(`Tres produtos, Preço: R$ ${preco} -desconto =  ${desconto2}`);

// var preco3 = 6000;
// var desconto3 = 0.15;
// desconto3 = preco * desconto3;
// preco -= desconto3;

// console.log(
// `4 ou mais produtos, Preço R$: ${preco3} - desconto = ${desconto3}`
// );

var precoCelular = 1500;

const calcularPrecoFinal = (quantidade) => {
  let desconto = 0;
  if (quantidade == 2) {
    desconto = 0.05;
  } else if (quantidade == 3) {
    desconto = 0.1;
  } else if (quantidade >= 4) {
    desconto = 0.15;
  }

  let precoFinal = precoCelular * quantidade * (1 - desconto);
  console.log(
    `Valor final para ${quantidade} unidade é R${precoFinal.toFixed(2)}`
  );
};
calcularPrecoFinal(2);
calcularPrecoFinal(3);
calcularPrecoFinal(4);

console.log(
  "___________________________________________________________________________________________________"
);

//6
var num = 90;
console.log(`numero ${num}`);
if (num % 3 == 0 && num % 5 == 0) {
  console.log(`Multiplo de ambos`);
} else if (num % 3 == 0) {
  console.log(`Multiplo de 3`);
} else if (num % 5 == 0) {
  console.log(`Multiplo de 5`);
}

console.log(
  "________________________________________________________________________________________________"
);
//7
const verificarAnoBissexto = (ano) => {
  if (ano % 400 === 0) {
    return console.log(`${ano} é bissexto porque é divisível por 400`);
  }
  if (ano % 100 === 0) {
    return console.log(
      `${ano} não é bissexto porque é divisível por 100, mas não por 400`
    );
  }
  if (ano % 4 === 0) {
    return console.log(
      `${ano} é bissexto porque é divisível por 4, mas não por 100`
    );
  }
  return console.log(`${ano} não é bissexto porque não é divisível por 4`);
};

verificarAnoBissexto(2024);
verificarAnoBissexto(1900);
verificarAnoBissexto(3000);
verificarAnoBissexto(2000);

//var ano = 2024
//if ((ano % 4 === 0 && ano % 100 !== 0 ) || ano % 400 === 0){
//} é bissexto
//não  bissexto

//8

var diasDaSemana = 7;

switch (diasDaSemana) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  case 4:
    console.log("Quinta-feira");
    break;
  case 5:
    console.log("Sexta-feira");
    break;
  case 6:
    console.log("Sabado");
    break;
  default:
    console.log("Dia informado inválido!");
    break;
}

console.log(
  "--------------------------------------------------------------------------------------------------"
);

//9
var limite = 80;
var motorista = 95;
console.log(
  `Limite: ${limite}KM. | Velocidade do motorista: ${motorista}KM. | Multas: ${
    (motorista - limite) * 5
  }`
);

//if (velocidade > limite) {
//} multa = (velocidade - limite) * 5;
//${multa.tofixed(2)}

//10

var precosProduto = 120;
var desconto;

if (precosProduto < 50) {
  desconto = 0;
} else if (precosProduto >= 50 && precosProduto <= 100) {
  desconto = 0.05;
} else {
  desconto = 0.1;
}

var precoFinalProduto = precosProduto * (1 - desconto);
console.log(`preço final do produto ${precoFinalProduto}`);

//11
console.log("Numeros Pares de 0 a 50");
for (let i = 0; i <= 50; i += 2) {
  //PARES
  console.log(i);
}

console.log(
  "_________________________________________________________________________________________________"
);

//12
var tabuada = 9;
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

//13
var soma = 0;
for (let i = 1; i <= 100; i++) {
  soma += i;
}
console.log(soma);

console.log(
  "_______________________________________________________________________"
);
//14

var numeros = [3, 5, 7, 9, 11];
console.table(numeros);

var soma = numeros[0] + numeros[1] + numeros[2] + numeros[3] + numeros[4];
console.log(soma);

//var somaArray = array.reduce((anterior, atual) => anterior + atual, 0)
//soma os elementos do array clg ${somaArray}
console.log(
  "__________________________________________________________________________"
);
//15
//for (let i = 10; i >=  i--) {
//console.log(i);

//16
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];
console.log(frutas);
console.table(frutas);

frutas.splice(2);

//17

var array = [13, 5, 17, 9, 11];
var maior10 = array.filter((num) => num > 10);

console.log(`numeros maiores que 10 ${maior10}`);
console.table(maior10);

//19

var frase = "JavaScript é incrível!";
console.log(frase.toUpperCase());

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
//20
var frase = "A vida é bela e cheia de desafios";
var palavras = frase.split(" ");
// clt (palavras)
console.log(`a quantidade de palavras é ${palavras.length}`);


//21

var vetor = [12, 45, 68, 89, 23]
var maiorNumero = Math.max(...vetor) //tudo que tive dentro do vetor
console.log(`O maior numero é : ${maiorNumero}`)

//22
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++=")
var string = "Desenvolvimento"
var gnirts = string.split ("").reverse().join("")  //qubra a palavra, cada letra numa linha // inverte a ordem da pal //junta tudo numa palavra só.
console.log(`String invertida ${gnirts}`)

//23
console.log("______________________________________________________")
var frase = "Aprender JavaScript é maravilhoso!"
var letraA = (frase.match(/a/gi) || []).length
console.log(`numeros de letras a: ${letraA}`)

//24
var frase = "Desenvolvimento  Web"
var trocaVogal = frase.replace(/[aeiou]/gi, "*");
console.log(`Frase com vogais substituidas: ${trocaVogal}`)


console.log("__________________________________________________--")

//25

var numeros = [10, 20, 30, 40, 50];
var somaNumeros = 0 

for (let i = 0; i < numeros.length; i++) {
  somaNumeros += numeros[i]; 
}
console.log(`media dos numeros é: ${somaNumeros / numeros.length}`)