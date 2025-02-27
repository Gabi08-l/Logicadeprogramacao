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
class Pessoa {
  //CRIAMOS UMA CLASS CHAMADA PESSOA (o molde)
  constructor(PNome, pIdade) {
    //O CONSTRUTOR É COMO UM FORMULÁRIO, TUDO QUE POSSO COLOCAR DE COISAS A RESPEITO DOQ DEFINIU
    this.nome = PNome;
    this.idade = pIdade; //pode deixar sem o this pq ele ja esta dentro
  }
  apresentarSe() {
    console.log(`oi meu nome é ${this.nome}, tenho ${this.idade} anos`);
  }
  envelheecer() {
    this.idade++; //aumenta a idade em 1 ano
  }
}

var aluno1 = new Pessoa("Lucas", 22);
aluno1.apresentarSe();
aluno1.envelheecer();
aluno1.apresentarSe();



// Classe: Molde para criar objetos, como uma ficha de aluno ou um modelo de jogador de futebol

//objeto: um instancia real do modelo, como Lucas ou Neymar

//Atributo: Caracteristica do objeto, como nome e idade

//métodos: ações que o objeto pode fazer, como falar sua idade ou envelhecer.