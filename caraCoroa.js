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
    i++
} while (i <= 3);

console.log("----------------------------------");
console.log("================SCORE=============");
console.log(`|Cara: ${cara}`);
console.log(`|Cara: ${coroa}`);
console.log("------------------------------------");
