//========================OBJETOS DE JAVASCRIPT===========================
//Definindo uma classe em Javascript (Pessoa)
//1-Classe (o molde dos objetos) - SINGULAR

//class Pessoa {   //CRIAMOS UMA CLASS CHAMADA PESSOA (o molde)
//constructor(PNome, pIdade) {  //O CONSTRUTOR É COMO UM FORMULÁRIO, TUDO QUE POSSO COLOCAR DE COISAS A RESPEITO DOQ DEFINIU
//this.nome = PNome;
//this.idade = pIdade; //pode deixar sem o this pq ele ja esta dentro
//}
//}

//2. Objeto: Criando um personagem/aluno
//var aluno1 = new Pessoa("Lucas", 22); //   ACABO DE CRIAR UM 0BJETO, RAPAZ : Lucas com 22 anos
// aluno um é um objeto baseado no molde Pessoa

//3.Métodos - Ações que um objeto pode fazer
// class Pessoa {
//CRIAMOS UMA CLASS CHAMADA PESSOA (o molde)
//   constructor(PNome, pIdade) {
//O CONSTRUTOR É COMO UM FORMULÁRIO, TUDO QUE POSSO COLOCAR DE COISAS A RESPEITO DOQ DEFINIU
// this.nome = PNome;
// this.idade = pIdade; //pode deixar sem o this pq ele ja esta dentro
//   }
//   apresentarSe() {
// console.log(`oi meu nome é ${this.nome}, tenho ${this.idade} anos`);
//   }
//   envelheecer() {
// this.idade++; //aumenta a idade em 1 ano
//   }
// }

// var aluno1 = new Pessoa("Lucas", 22);
// aluno1.apresentarSe();
// aluno1.envelheecer();
// aluno1.apresentarSe();

// Classe: Molde para criar objetos, como uma ficha de aluno ou um modelo de jogador de futebol

//objeto: um instancia real do modelo, como Lucas ou Neymar

//Atributo: Caracteristica do objeto, como nome e idade

//métodos: ações que o objeto pode fazer, como falar sua idade ou envelhecer.

//Crie uma class para jogador de futebol onde tenha nome, idade e posição
//o objeto criado com bsae no jogador de futebol poderá apresentar-se
//da seguinte forma: Olá meu nome é "Neymar", tenho "33" anos e jogo na
//posição "Atacante"
//crie 3 objetos e faça com que eles se apresentem

class Jogador {
  constructor(nome, idade, posicao) {
    this.nome = nome;
    this.idade = idade;
    this.posicao = posicao;
  }
  apresentarSe(time) {
    console.log(
      `oi meu nome é ${this.nome}, tenho ${this.idade} anos e jogo de ${this.posicao}!`
    );
  }
}
var jogador1 = new Jogador("Neymar", 33, "Atacante");
jogador1.apresentarSe();

var jogador2 = new Jogador("Dani Alves", 36, "Lateral");
jogador2.apresentarSe();

var jogador3 = new Jogador("Yuri Alberto", 27, "Meio Campista");
jogador3.apresentarSe();

console.log("Vai Corinthians!");

console.log(
  "===================================================================================="
);

//------------------------------------------------------------------------
//Criando classe Retângulo
class Retangulo {
  constructor(comprimento, largura) {
    this.comprimento = comprimento;
    this.largura = largura;
  }

  alterarComprimento(comprimento) {
    this.comprimento = comprimento;
  }

  alterarLargura(largura) {
    this.largura = largura;
  }

  obterArea() {
    return this.comprimento * this.largura;
  }
}

var ret = new Retangulo(10, 15);
console.table(ret);

// Apresentando valores (atributos) do objeto instanciado
console.log(`Comprimento: ${ret.comprimento}`);
console.log(`Largura: ${ret.largura}`);

// Apresentando a area
console.log(`Área: ${ret.obterArea()}`);

// Alterando o comprimento do retangulo
ret.alterarComprimento(20);
console.table(ret);
// Apresentando valores (atributos) do objeto instanciado
console.log(`Comprimento: ${ret.comprimento}`);
console.log(`Largura: ${ret.largura}`);

// Alterando a largura do retangulo
ret.alterarLargura(30);
console.table(ret);
// Apresentando valores (atributos) do objeto instanciado
console.log(`Comprimento: ${ret.comprimento}`);
console.log(`Largura: ${ret.largura}`);

// Calculando a area
console.log(`Área: ${ret.obterArea()}`);

/*********************************************************************
 *    Crie utilize uma classe "sorvete" contendo as propriedades: sabor, preço e tamanho
 * (P/M/G)
 * altere o preco do sorvete de morango grande para $10,51
 */

class Sorvete {
  constructor(sabor, preco, tamanho) {
    this.sabor = sabor;
    this.preco = preco;
    this.tamanho = tamanho;
  }
}

var Sorvete1 = new Sorvete("Chocolate", 3.5, "P");
var Sorvete2 = new Sorvete("Morango", 3.5, "G");
var Sorvete3 = new Sorvete("Pistache", 4.5, "M");

console.log(
  `Sorvete escolhido: ${Sorvete1.sabor} | ${Sorvete1.tamanho} | Valor: R$ ${Sorvete1.preco}`
);

Sorvete2.preco = 10.51;
console.table(Sorvete2);

Sorvete3.tamanho = "G";
console.table(Sorvete3);
