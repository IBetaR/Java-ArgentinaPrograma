"use strict";
exports.__esModule = true;
exports.Aeroplano = void 0;
var Aeroplano = /** @class */ (function () {
    function Aeroplano(phelice, pturbina, pcabina, palascortas, palaslargas) {
        this.helice = phelice;
        this.turbinas = pturbina;
        this.cabina = pcabina;
        this.alascortas = palascortas;
        this.alaslargas = palaslargas;
    }
    Aeroplano.prototype.toString = function () {
        var mensaje = "Aeroplano compuesto por:" + '\n';
        mensaje += this.helice.ToString();
        mensaje += this.alascortas.ToString() + '\n';
        //mensaje += this.trenAterrizaje.ToString();
        mensaje += this.cabina.ToString();
        return mensaje;
    };
    return Aeroplano;
}());
exports.Aeroplano = Aeroplano;
