// String
let nome: string = 'Claudio';
console.log(nome);
//nome = 28;

// numbers

let idade: number = 27;
//idade = 'Teste';
idade = 27.5;

//Boolean
let isBoolean: boolean = true;
//isBoolean = 1
isBoolean = false;

// Tipos explísitos 
let myAge: any
myAge = 27;
console.log(typeof myAge);

//Array
let hobbies: any[] = ["Cozinhar", "Praticar Desporto"];
console.log(hobbies[0]);
console.log(typeof hobbies);

hobbies = [100];
//hobbies = 100;

//Tupulas
let endereco: [string, number] = ["Avenida XPTO", 6300];

//Enum
enum Cor {
    Cinza, //0
    Verde = 100, //100
    Azul = 10, //10
    Laranja, // 11
    Amarelo, // 12
    Vermelho = 100 //100
}

let minhaCor: Cor = Cor.Verde;

console.log('---<<>>', minhaCor)


