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
var minhaCor = Cor.Laranja;
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
// Union Types
var nota = 10;
console.log("Minha nota \u00E9 " + nota + "!");
nota = '10';
console.log("Minha nota \u00E9 " + nota + "!");
// Check types
var valor = 30;
if (typeof valor === "number") {
    console.log('É um valor number');
}
else {
    console.log(typeof valor);
}
// Never
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'Sabão',
    preco: 4,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco < 0) {
            falha('Preço inválido');
        }
    }
};
produto.validarProduto();
var altura = 12;
//altura = null;
var alturaOpcional = 12;
alturaOpcional = null;
var contacto1 = {
    nome: 'Fulano',
    tel1: '967372428',
    tel2: null,
};
var podeSerNulo = null; // fica como default o tipo any
podeSerNulo = 12;
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contactos: ['234912891', '313132434']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipos.js.map