# Curso de Typescript (Apontamentos)

## Instalação do Typescript

```
sudo npm install -g typescript
```

```
tsc --init
```

```
tsc introducao/base.ts
```

## Executar Typescript com Code Runner

Code Runner - https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner

Para utilizar o Code Runner com Typescript é necessário instalar o ts-node `sudo npm install -g ts-node`

Para executar um ficheiro .ts usar as teclas `ctrl + alt + n`

## Compilação à medida que é feito "save"

```
 tsc -w
```

## Types

```
any
void

boolean
number
string

null
undefined

string[]
[string, number]

string | null | undefined

never

enum Color { Red, Green, Blue = 4 }
let c: Color = Color.Green

```
### Exemplos
```ts
let name: string = 'Claudio';
let age: number = 27;
let isBoolean: boolean = true;
```

```ts
let myAge: any
myAge = 27
myAge = ‘27’
```

```ts
let hobbies: string[] = ["Hobbie 1", "Hobbie 2"];
let address: [string, number] = ["Avenida X", 6300];
```

```ts
enum Color {
    Green,       //0
    Blue = 100,  //100
    Red = 10,    //10
    Orange,      // 11
    yellow,      // 12
    violet = 100 //100
}
let myColor: Color = Color.Blue;// 100
```

```ts
function returnString(): string {
    return ‘String’;
}
function voidExample(): void {
    console.log('Void');
}

function multiply(numA: number, numB: number): number {
    return numA * numB;
}

function fail(msg: string): never {
    throw new Error(msg);
}
```

```ts
let calculate: (numberA: number, numberB: number) => number = function(numA: number, numB: number): number {
    return numA * numB;
};
```

```ts
let user: {name: string, age: number} = {
    name: 'Claudio',
    age: 27,
}
```

```ts
type Employee = {
    supervisors: string[],
    hitPoint: (hours: number) => string
}
let employee: Employee = {
    supervisors: ['Ana', 'Fernando'],
    hitPoint(hours: number): string {
        if(hours <= 8) {
            return 'Normal Point';
        }
        return 'Out of Hours';
    }
};
```

```ts
let note: number | string = 10;
console.log(`My note is ${note}!`);
note = '10';
console.log(`My note is é ${note}!`);
```