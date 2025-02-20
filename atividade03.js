//LISTA DE EXERCICIO
//1.Crie um array de frutas com os seguintes elementos: banana, maçã, pera, uva, morango
//adicione Tangerina no final
//adicione goiaba no inicio
//exibao conteudo no indice 5
//exclua o elemento uva
// crie uma copia do array apenas com os elementos com indices 2,3 e 4

var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];
console.log(frutas);
console.table(frutas);
console.log("O vetor frutas tem:", frutas.length, "elementos");

frutas.push("Tangerina");
console.table(frutas);
console.log("O vetor frutas tem:", frutas.length, "elementos");

frutas.unshift("Goiaba");
console.table(frutas);



console.log(frutas [5])

//var elementoExcluir = "Uva";
var posicao = frutas.indexOf("Uva");
frutas.splice(posicao, 1);
console.table(frutas);

var copia = frutas.slice(2, 5);
console.table(copia);


