import { Alas } from "./Alas";
import { Cabina } from "./Cabina";
import { Helice } from "./Hélice";
import { Turbinas } from "./Turbina";

export class Aeroplano{
    private helice: Helice;
    private turbinas: Turbinas;
    private alascortas: Alas;
    private alaslargas: Alas;
    private cabina: Cabina;

    public constructor(phelice: Helice, pturbina: Turbinas, pcabina: Cabina, palascortas: Alas, palaslargas:Alas){
        this.helice = phelice;
        this.turbinas = pturbina;
        this.cabina = pcabina;
        this.alascortas = palascortas;
        this.alaslargas = palaslargas;

    }
    public toString(){
        let mensaje = "Aeroplano compuesto por:" + '\n';
        mensaje += this.helice.ToString();
        mensaje += this.alascortas.ToString() + '\n';
        //mensaje += this.trenAterrizaje.ToString();
        mensaje += this.cabina.ToString();
        return mensaje;
    }


}