"use strict";
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        if (dia === void 0) { dia = 1; }
        if (mes === void 0) { mes = 1; }
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data;
}());
var aniversario = new Data(29, 5, 1992);
aniversario.dia = 1;
console.log(aniversario.dia);
console.log(aniversario);
var casamento = new Data; //Podese omitir os ()
casamento.ano = 2019;
console.log(casamento);
var DataEsperta = /** @class */ (function () {
    function DataEsperta(dia, mes, ano) {
        if (dia === void 0) { dia = 1; }
        if (mes === void 0) { mes = 1; }
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return DataEsperta;
}());
var aniversarioEsperto = new DataEsperta(29, 5, 1992);
aniversarioEsperto.dia = 1;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);
var casamentoEsperto = new DataEsperta; //Podese omitir os ()
casamentoEsperto.ano = 2019;
console.log(casamentoEsperto);
// Desafio
var Produto = /** @class */ (function () {
    function Produto(nome, preco, desconto) {
        if (desconto === void 0) { desconto = 0; }
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    return Produto;
}());
var produto1 = new Produto('Nome produto 1', 30, 15);
console.log(produto1);
var produto2 = new Produto('Nome produto 1', 30);
console.log(produto2);
//# sourceMappingURL=classes.js.map