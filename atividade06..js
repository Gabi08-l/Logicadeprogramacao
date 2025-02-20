//LISTA DE EXERCICIOS
//1 crie uma função que receba a idade de uma pessoa e retorne uma mensagem informando se ela ta podendo votar no brasil
//REGRAS PRA VOTAÇÃO NO BRASIL
//MENORES DE Q6 ANOS NÃO PODEM VOTAR
//ENTRE 16 E 17 ANOS OU ACIMA DE 70 ANOS NAO SAO OBRIGADOS
//ENTRE 18 E 70 O VOTO E OBRIGATORIO

const podeVotar = (idade) => {
    //isso é uma função
    if (idade < 16) {
      return "você não pode votar!";
    } else if (idade >= 18 && idade < 70) {
      return "você pode votar!";
    } else {
      return "seu voto é facultativo!";
    }
  };
  var nome = ["Ygona", "Lucas", "Batata", "Fernanda", "Cristinne"];
  console.log("Olá", nome[0], "você tem 16 anos e", podeVotar(16));
  console.log("Olá", nome[1], "você tem 22 anos e", podeVotar(22));
  console.log("Olá", nome[2], "você tem 70 anos e", podeVotar(70));
  console.log("Olá", nome[3], "você tem 12 anos e", podeVotar(12));
  console.log("Olá", nome[4], "você tem 67 anos e", podeVotar(67));
    

