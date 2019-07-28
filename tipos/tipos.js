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
//Tipo any
var carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
// Funções
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('OI');
    //return minhaIdade;
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 9));
//tipo funcao
var calculo;
//calculo = digaOi;
//calculo();
calculo = multiplicar;
console.log(calculo(5, 6));
// Objectos
var user = {
    nome: 'Claudio',
    idade: 27,
};
console.log(user);
//user = {};
//user = {
//    name: 'Maria',
//    age: 30,
//};
user = {
    nome: 'Claudio 1',
    idade: 30,
};
console.log(user);
var functionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto: function (horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        return 'Fora do Horário';
    }
};
var functionario2 = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto: function (horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        return 'Fora do Horário';
    }
};
console.log(functionario.supervisores);
console.log(functionario.baterPonto(8));
console.log(functionario.baterPonto(9));
