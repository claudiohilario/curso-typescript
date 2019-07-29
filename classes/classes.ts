class Data {
    dia: number;
    public mes: number;
    ano: number;

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
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