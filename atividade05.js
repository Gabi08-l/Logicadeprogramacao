//LISTA DE EXERCICIO
//1 CRIE UMA FUNÇÃO QUE RECEBA COMO PARAMETRO O ANO DE NASCIMENTO DE UMA PESSOA E RETORNE SUA IDADE
//2 CRIE UMA FUNÇÃO QUE RECEBA A QUANTIDADE DE COMBUSTIVEL DE UM CARRO E RETORNE QUANTOS KMS ELE PODE VIAJAR COM ESSE COMBUSTIVEL. 
//CONSIDERE QUE O VEICULO FAZ UMA MEDIA DE 12 KMS/L

function idade (anoAtual, anoNascimento){
    return anoAtual - anoNascimento;

}
  
console.log("A pessoa tem", idade (2025, 2008), "anos.");

//
const combustivel = (litros) => { 
    return litros * 12
}
var car1 = 20;
var car2 = 8;
var car3 = 2;
console.log("Carro 1: ", car1, "->", combustivel(car1), "kms.")
console.log("Carro 2: ", car2, "->", combustivel(car2), "kms.")
console.log("Carro 3: ", car3, "->", combustivel(car3), "kms.")
