"use strict";
exports.__esModule = true;
exports.Turbinas = void 0;
var Turbinas = /** @class */ (function () {
    function Turbinas(n) {
        this.numTurbinas = 0;
        this.numTurbinas = n;
    }
    Turbinas.prototype.ToString = function () {
        return this.numTurbinas + "Turbina/s";
    };
    return Turbinas;
}());
exports.Turbinas = Turbinas;
