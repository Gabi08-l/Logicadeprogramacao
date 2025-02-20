// OPERADORES DE INCREMENTO DE DECREMENTO /PRÉ E PÓS INCREMENTO
var idade = 16;
console.log(idade);

idade++; //IDADE = IDADE + UM
console.log(idade);

idade--; //IDADE = IDADE - UM
console.log(idade);
console.log("-----------------------------");

var novaIdade = idade++;
console.log("Nova idade:", idade, "| Nova idade:", novaIdade); //ERRADO

novaIdade = ++idade;
console.log("Idade", idade, "| Nova Idade:", novaIdade);

//OPERADORES DE ATRIBUIÇÃO DE ARITMÉTICA
console.log("-------------------------------");
var x = 10;
var y = 5;
console.log("x =", x, "| y =", y);

x += y; //x = x + y
console.log("x =", x, "| y =", y);

x -= y; // x = á x - y
console.log("x =", x, "| y =", y);
x *= y;
console.log("x =", x, "| y =", y);

x /= y; // X = Á X DIVIDIDO POR Y
console.log("x =", x, "| y =", y);

x **= y // x = x elevado a y;
console.log("x =", x, "| y =", y);

x %= y
console.log("x =", x, "| y =", y);

x = 13;
x %= y // x = resto da div INTEIRA de x por y
console.log("x =", x, "| y =", y);


//**************************************************** 
                //Lista de Exercícios 
//*****************************************************/
/*  
1. Realize as seguintes instruções: - Crie uma variável texto e armazene o nome de uma pessoa - Crie uma variável numérica e armazene o ano de nascimento - Escreva "Nome da pessoa" nasceu em "ano de nascimento" - Calcule a idade da pessoa - Escreva "Nome da pessoa" tem "idade" anos 
2. Se um retângulo possui comprimento=12cm e largura=6cm, qual a sua área?  
3. E se adicionarmos uma dimensão altura=5cm, qual seria o volume?  
4. Se temos uma equação 2x² + 3x -1, qual seria o valor de delta?  
5. Um cliente fez um compra no valor de R$ 450,00 e obteve 3% de desconto. 
Qual o valor do desconto e o valor final da compra ?  
6. Um carro viaja por três horas e meia a uma velocidade média de 95 Km/h.  
Calcule a distância percorrida, sabendo que Vmedia = S/T 
*/


