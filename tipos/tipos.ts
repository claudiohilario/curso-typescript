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

//Tipo any
let carro: any = 'BMW';

console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);

// Funções
function retornaMeuNome(): string {
    return nome;
}

console.log(retornaMeuNome());

function digaOi(): void {
    console.log('OI');
    //return minhaIdade;
}

digaOi();

function multiplicar(numA: number, numB: number): number {
    return numA * numB;
}

console.log(multiplicar(2, 9));

//tipo funcao
let calculo: (numeroA: number, numeroB: number) => number;
//calculo = digaOi;
//calculo();

calculo = multiplicar;
console.log(calculo(5, 6))

// Objectos

let user: {nome: string, idade: number} = {
    nome: 'Claudio',
    idade: 27,
}

console.log(user);

//user = {};

//user = {
//    name: 'Maria',
//    age: 30,
//};


user = {
    nome: 'Claudio 1',
    idade: 30,
}

console.log(user);

// DESAFIO
// Alias
type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

let functionario: Funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario: number): string {
        if(horario <= 8) {
            return 'Ponto normal';
        }
        return 'Fora do Horário';
    }
};

let functionario2: Funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario: number): string {
        if(horario <= 8) {
            return 'Ponto normal';
        }
        return 'Fora do Horário';
    }
};

console.log(functionario.supervisores);
console.log(functionario.baterPonto(8));
console.log(functionario.baterPonto(9));

// Union Types
let nota: number | string = 10;
console.log(`Minha nota é ${nota}!`);

nota = '10';
console.log(`Minha nota é ${nota}!`);
