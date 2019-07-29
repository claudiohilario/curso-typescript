"use strict";
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        if (dia === void 0) { dia = 1; }
        if (mes === void 0) { mes = 1; }
        if (ano === void 0) { ano = 1970; }
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
//# sourceMappingURL=classes.js.map