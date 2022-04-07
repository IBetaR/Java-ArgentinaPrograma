"use strict";
exports.__esModule = true;
exports.Helice = void 0;
var Helice = /** @class */ (function () {
    function Helice(c) {
        this.cantHelices = 0;
        this.cantHelices = c;
    }
    Helice.prototype.ToString = function () {
        return "Helice/s: " + this.cantHelices + " hélices" + '\n';
    };
    return Helice;
}());
exports.Helice = Helice;
