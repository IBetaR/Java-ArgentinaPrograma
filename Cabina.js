"use strict";
exports.__esModule = true;
exports.Cabina = void 0;
var Cabina = /** @class */ (function () {
    function Cabina(pCabinaTripulacion, pCabinaVuelo, pSistemaEmergencia, pTanquesCombustible, pPuertasSalida) {
        this.cabinaTripulacion = false;
        this.cabinaVuelo = false;
        this.sistemaEmergencia = false;
        this.numTanquesCombustible = 0;
        this.numPuertasSalida = 0;
        this.cabinaTripulacion = pCabinaTripulacion;
        this.cabinaVuelo = pCabinaVuelo;
        this.sistemaEmergencia = pSistemaEmergencia;
        this.numTanquesCombustible = pTanquesCombustible;
        this.numPuertasSalida = pPuertasSalida;
    }
    Cabina.prototype.ToString = function () {
        var mensaje = "Cabina compuesta de: ";
        if (this.cabinaVuelo) {
            mensaje += " Cabina de Vuelo, ";
        }
        if (this.cabinaTripulacion) {
            mensaje += " Cabina de Tripulación, ";
        }
        if (this.sistemaEmergencia) {
            mensaje += " Sistema de Emergencia, ";
        }
        mensaje += this.numTanquesCombustible + " Tanques de Combustible, ";
        mensaje += this.numPuertasSalida + " Puertas de Salida.";
        return mensaje;
    };
    return Cabina;
}());
exports.Cabina = Cabina;
