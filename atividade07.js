//LISTA DE EXERCICIOS 07
//DADA A MATRIZ ABAIXO, FAÇA UM PROGRAMA EM JAVASCRPT QUE 
// EXIBA AO USUARIO OS ELEMENTOS DA SUA DIAGONAL PRINCIPAL
// | 3 5 8 |
// |1  9  2|
// |7  1  4|


var matriz = [
    [3, 5, 8],
    [1, 9, 2],
    [7, 1, 4],
  ];
  for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[0].length; coluna++) {
        linha == coluna &&
       console.log(`Matriz [${linha}][${coluna}] = ${matriz[linha][coluna]}`);
    }
  }

console.log("====================================================================")

  //Dada a matriz abaixo, faça um programa em javascript que multiplique seus elementos por um valor x
  //e exiba ao usuario a matriz antes e depois após a multiplicação
//|3 5 8 |
//|1 9 2 |
//|7 1 4 |

var x = 4
var matriz = [
    [3, 5, 8],
    [1, 9, 2],
    [7, 1, 4],
];
console.table(matriz);

for (let linha = 0; linha.length; linha++){
    for (let coluna = 0; coluna < matriz[0].length; coluna++) {
matriz[linha][coluna] *= x
    }
    }
console.table(matriz);

//Faça num loop FOR onde apresente os numeros impares de 0 a 100.