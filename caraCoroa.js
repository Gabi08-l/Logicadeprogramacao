//console.log("===================================================================================")
// Jogo cara ou coroa, com 3 rodadas, usando DO-WHILE
//console.log("--------------------------------------")
//console.log("               PLACAR")
//console.log("--------------------------------------")
//console.log(`Vitórias ; variavelVitoria`);
//console.log(`Derrotas: variaveisDerrotas`);
//console.log("=====================================")

//var cara = 0;
//var coroa = 0;
//var contador = 1;

//do {
//cara = Math.random()*3 ? cara : coroa
//console.log("cara")
//console.log("coroa")
//contador ++
//} while (contador<=);

//CORREÇÃO
var i = 1;
var cara = 0;
var coroa = 0;

do {
  let face = Math.random() * 100;
  face < 50 ? cara++ : coroa++;
  i++;
} while (i <= 3);

console.log("----------------------------------");
console.log("================SCORE=============");
console.log(`|Cara: ${cara}`);
console.log(`|Cara: ${coroa}`);
console.log("------------------------------------");


//A POPULAÇÃO DO PAIS A CRESCE 3% AO ANO , E A TAXA DE CRESCMENTO DO PAIS B É DE 1,5%
//FAZER UM ALGORITMO QUE CALCULE E ESCREVA O NUMERO DE ANOS NECESSÁRIOS PARA QUE A POPULAÇÃO
//DO PAIS A ULTRAPASSE OU IGUALE A POPULAÇÃO DO PAIS B, MANTIDAS ESSAS TAXAS DE CRESCIMENTO

var a = 800000;
var b = 950000;
var anos = 0;

while (a<b) {
 anos++
 a += (a* 0.03/100)
 a += (a* 1.5/100)
 console.log(`Ano: ${anos} | População A: ${Math.round(a)} | População B: ${Math.round(b)}`)
}
console.log(`Quantidade de anos para superar ou igualar a B é de ${anos}`)