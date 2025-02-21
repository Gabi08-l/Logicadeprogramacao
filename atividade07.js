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
  console.table(matriz);
console.log(matriz[0][0], "|", matriz[1][1], "|", matriz[2][2]);
//for (let linha = 0; linha < matriz.length; linha++) {
  //  for (let coluna = 0; coluna < matriz[0].length; coluna++)