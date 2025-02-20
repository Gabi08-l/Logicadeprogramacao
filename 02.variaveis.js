// Criando variáveis com "var" (var nome_variavel = <valor>;) 
var nome = "Tibúrcio"; 
console.log("Meu nome é", nome); 
var idade = 23; 
console.log("Meu nome é", nome, ", e eu tenho ", idade, "anos"); 
idade = idade + 1; 
console.log("Meu nome é", nome, ", e agora eu tenho ", idade, "anos"); 

console.log('------------------------------------------------------------')

//JavaScript trabalha com sistema case sensitive (maiuscula são diferentes de minusculas)
console.log('Criando uma variavel Teste e tentando acessar como testE');
let Teste = 'Variável teste!';
// console.log(testE);
console.log(Teste);

//REGRAS PARA NOMEAR INDENTIFICADORES (VARIAVEIS)
//PODEM INICIAR COM  "A - Z" "a - z", ''_'' ou '$
// nao pode iniciar com '- ', numeros, 

//VARIAVEIS LOGICAS (BOOLEAN)
var nome = "Gus";
var rico = false;
var eProfessor = true
console.log("Nome", nome, "| É professor?", eProfessor, "| É rico?", rico);
