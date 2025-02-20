// OPERADORES LÓGICOS
var souPobre = true
console.log("===================");
console.log("Sou pobre?", souPobre);
console.log("Negação de souPobre:", !souPobre);

var manha = true;
var sono = true;
console.log("----------------------------");
console.log("Manhã:", manha, "| estou com sono?", sono);
//OPERACIONAL SIMPLES
console.log("Operador AND (E):", manha && sono);

console.log("operador OR (OU):", manha || sono);

manha = false;
console.log("----------------------------");
console.log("Manhã:", manha, "| estou com sono?", sono);

console.log("Operador AND (E):", manha && sono);

console.log("operador OR (OU):", manha || sono);

sono = false;
console.log("----------------------------");
console.log("Manhã:", manha, "| estou com sono?", sono);

console.log("Operador AND (E):", manha && sono);

console.log("operador OR (OU):", manha || sono);

