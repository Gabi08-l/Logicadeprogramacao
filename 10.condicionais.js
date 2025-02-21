//CONDICIONAL SIMPLES COM IF
var anoNascimento = 2008;
if (anoNascimento > 2008) {
  console.log("A pessoa nasceu depois de 2008");
}

if (anoNascimento < 2008) {
  console.log("A pessoa nascu antes de 2008");
}

if (anoNascimento == 2008) {
  console.log("A pessoa nasceu em 2008");
}

//CONDIÇÕES SIMLPES COM IF-ELSE
var anoNascimento = 2005;
if (anoNascimento > 2000) {
  console.log("A pessoa nasceu depois de 2000");
} else {
  console.log("A pessoa nasceu em 2000 ou antes");
}

//CONDIÇÕES COMPOSTAS IF
const login = "admin";
const senha = "12345";

var loginUser = "admin";
var senhaUser = "12345";

if (loginUser == login && senhaUser == senha) {
  console.log("Acesso permitido!");
} else {
  console.log("Acesso Negado!");
}

//DESVIO CONDICIONAL ANINHADO - IF-ELSEIF-IF-ELSE
var semaforo = "vermelho";

if (semaforo == "verde") {
  console.log("SIGA!");
} else if (semaforo == "amarelo") {
  console.log("ATENÇÃO!");
} else {
  console.log("PARE!");
}

//DeSVIO CONDICIONAL IF COM BLOCOS DE COMANDO
var idade = 18;

if (idade <= 18) {
  console.log("entrei no if...");
  idade++;
  console.log("Incrementei a idade...");
  console.log("A nova idade é", idade);
  console.log("Agora estou saindo do bloco if");
}
console.log("Terminei");

//CRIANDO VARIAVEIS LOCAIS COM "LET" (SÓ EXISTE DENTRO DO BLOCO ONDE FORAM CRIADAS)
var mes = "Agosto";
var dia = 15;

if (dia == 15 && mes == "Agosto") {
  let mensagem = "Hoje é dia 15 de agosto";
  console.log(mensagem);
}
console.log("Tentando acessar a variavel local fora do bloco, vai dar erro!");
//console.log(mensagem);

//CRIANDO UMA FUNÇÃO COM DESVIO CONDICIONAL IF
const desconto = (valorCompra) => {
  let desconto = 0;
  if (valorCompra >= 1000) {
    desconto = (valorCompra * 12) / 100;
  }
  return desconto;
};

var totalCompra = 950;
console.log(
  "Valor total da compra: R$",
  totalCompra,
  "::: Desconto: R$",
  desconto(totalCompra)
);
totalCompra = 1800;
console.log(
  "Valor total da compra ",
  totalCompra,
  "::: Desconto: R$",
  desconto(totalCompra)
);

//DESVIO CONDICIONAL IF INLINE (TERNÁRIO)
//condição ? expressão_se_verdadeiro : expressão_se_falso
var preco = 100;
var resultado = preco <= 100 ? "Tá barato!" : "Vish! Tá muito caro!";
console.log("Preço: R$", preco, "-", resultado);

//if ternário com somente uma expressão
//condição && expressão
var logado = true;
logado && console.log("Usuário está logado!");




//DESVIO condicional - sSWITCH CASE
switch (1) {
  case 1:
    console.log("O usuário digitou o número 1 ");
    break;

  default:
    console.log("O usuário informou um número diferente de 1");
    break;
}
console.log(
  "---------------------------------------------------------------------------------------"
);

//MENU DE SELEÇÃO
var menuSelecionado = "Contato";

switch (menuSelecionado) {
  case "Home":
    console.log("Voce clicou no link 'Home'!");

    break;

  case "Quem somos":
    console.log("Voce clicou no link 'Quem somos'!");
    break;

  case "Contato":
    console.log("Voce clicou no link 'Contato'!");
    break;

  default:
    console.log("Opção inválida de menu");
    break;
}
console.log("-------------------------------------------------------------------------")
//VARIAS OPÇÕES COM MESMO CASE - SWITCH CASE
var mes = 11;

switch (mes) {
  case 1:
  case 2:
  case 3:
    console.log("Primeiro trimestre");
    break;
  case 4:
  case 5:
  case 6:
    console.log("Segundo trimestre");
    break;
  case 7:
  case 8:
  case 9:
    console.log("Terceiro trimestre");
    break;
  case 10:
  case 15:
  case 12:
    console.log("Quarto trimestre");
    break;

  default:
    console.log("Mes inválido!")
    break;
}

