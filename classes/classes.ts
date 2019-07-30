class Data {

    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

const aniversario = new Data(29, 5, 1992);
aniversario.dia = 1;
console.log(aniversario.dia);
console.log(aniversario);

const casamento = new Data; //Podese omitir os ()
casamento.ano = 2019;
console.log(casamento);

class DataEsperta {
    dia: number;
    public mes: number;
    ano: number;

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

const aniversarioEsperto = new DataEsperta(29, 5, 1992);
aniversarioEsperto.dia = 1;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);

const casamentoEsperto = new DataEsperta; //Podese omitir os ()
casamentoEsperto.ano = 2019;
console.log(casamentoEsperto);

// Desafio

class Produto {
    constructor(public nome: string, public preco: number, public desconto: number = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
}

const produto1 = new Produto('Nome produto 1', 30, 15);
console.log(produto1);

const produto2 = new Produto('Nome produto 1', 30);
console.log(produto2);

