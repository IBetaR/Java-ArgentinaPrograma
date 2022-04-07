"use strict";
exports.__esModule = true;
exports.Alas = void 0;
var Alas = /** @class */ (function () {
    function Alas(a, b) {
        this.numAlasCortas = 0;
        this.numAlasLargas = 0;
        this.numAlasCortas = a;
        this.numAlasLargas = b;
    }
    Alas.prototype.ToString = function () {
        return this.numAlasCortas + " Alas Cortas" + "y " + this.numAlasLargas + " Alas Largas,";
    };
    return Alas;
}());
exports.Alas = Alas;
