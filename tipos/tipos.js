"use strict";
// String
var nome = 'Claudio';
console.log(nome);
//nome = 28;
// numbers
var idade = 27;
//idade = 'Teste';
idade = 27.5;
//Boolean
var isBoolean = true;
//isBoolean = 1
isBoolean = false;
// Tipos explísitos 
var myAge;
myAge = 27;
console.log(typeof myAge);
//Array
var hobbies = ["Cozinhar", "Praticar Desporto"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100];
//hobbies = 100;
//Tupulas
var endereco = ["Avenida XPTO", 6300];
//Enum
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho"; //100
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log('---<<>>', minhaCor);
