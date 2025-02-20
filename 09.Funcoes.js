function somar2Mais2() {
  return 2 + 2;
}
console.log(somar2Mais2());

//CRIANDO UMA FUNÇÃO QUE SOMA DOIS VALORES E RETORNA O RESULTADO
function somar(val1, val2) {
  return val1 + val2;
}
console.log("5 + 3 =", somar(5, 3));
console.log("12 + 8 =", somar(12, 8));
console.log("6,5 + 12", somar(6.5, 2.12));

var v1 = 9;
var v2 = 6;
console.log("v1 + v2 =", somar(v1, v2));

//CRIANDO UMA FUNÇAO QUE ESCREVE "BOM DIA" (EU SOU O TITIO AVO)
function bomDia(nome) {
  console.log("Olá", nome, "\n Muito bom dia pra voce!");
}
bomDia("Gabi");

//CRIANDO UMA FUNÇÃO QUE CALCULA E RETORNA O DESCONTO EM UMA VENDA
function desconto(valor) {
  return valor * 0.05; //5/100 ou 0.05
}
console.log("O desconto do produto no valor de 100 reais é R$:", desconto(100));
var totalPedido = 300
var totalDesconto = desconto(totalPedido);
var valorFinal = totalPedido - totalDesconto;

console.log("-------------------------------------------------------------------");
console.log("total do Pedido: R$", totalPedido);
console.log("Total dos Descontos: R$", totalDesconto);
console.log("Valor liquido: R$", valorFinal);
console.log("--------------------------------------------------------------------");

//CRIANDO UMA FUNÇÃO QUE APRESENTA PESSOAS com arrow fuction
const apresentaPessoas = (nomePessoas, idade, Cidade) => {
    //Apresento a voces : "NomeaPessoa", que tem "XX" anos e mora em "Cidade"
    console.log("Apresento a voces,", nomePessoas, "que tem", idade, "e mora em", Cidade);
}


apresentaPessoas ("Zuleika", 19, "Brotas");
apresentaPessoas ("Faguncio", 21, "Jau");
apresentaPessoas ("Epaminondas", 16, "Barra Bonita");