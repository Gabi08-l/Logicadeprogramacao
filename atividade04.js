//LISTA DE EXERCICIOS

//1 CRIE E IMPRIMA UM VETOR COM 5 ELEMENTOS NUMÉRICOS
//2IMPRIMA NA TELA O 3° ELEMENTO DO VETOR
//3 FAÇA UMA COPIA DO VETOR ORIGINAL
//4 ALTERE O CONTEUDO DO VETOR CÓPIA PARA QUE SEUS VALORES SEJAM O DOBRO DOS VALORES DO VETOR ORIGINAL
//5 CRIE UMA MATRIZ 3X3
//6 IMPRIMA OS VALORES DA DIAGONAL PRINCIPAL

var numeros = [0, 1, 2, 3, 4];
console.log(numeros);
console.table(numeros);

console.log(numeros[2]);

var copia = numeros.slice();
console.table(copia);

copia[0] = numeros[0] * 2;
copia[1] = numeros[1] * 2;
copia[2] = numeros[2] * 2;
copia[3] = numeros[3] * 2;
copia[4] = numeros[4] * 2;
console.table(copia);

var matriz = [
[9, 0, 1],
[7, 1, 2],
[6, 2, 8]
];

console.log(matriz[0][0], "|", matriz[1][1], "|", matriz[2][2]); //0.1; 1.1; 



