export class Cabina {

        private cabinaTripulacion:boolean = false;
        private cabinaVuelo:boolean = false;
        private sistemaEmergencia:boolean = false;
        private numTanquesCombustible:number = 0;
        private numPuertasSalida:number =0;

        public constructor( pCabinaTripulacion:boolean, pCabinaVuelo:boolean,pSistemaEmergencia:boolean, pTanquesCombustible:number, pPuertasSalida:number)
        {
            this.cabinaTripulacion = pCabinaTripulacion;
            this.cabinaVuelo = pCabinaVuelo;
            this.sistemaEmergencia = pSistemaEmergencia;
            this.numTanquesCombustible = pTanquesCombustible;
            this.numPuertasSalida = pPuertasSalida;

        }
        public ToString(){
            let mensaje ="Cabina compuesta de: "
            if(this.cabinaVuelo)
            {
                mensaje+= " Cabina de Vuelo, "
            }
            if(this.cabinaTripulacion)
            {
                mensaje+= " Cabina de Tripulación, "
            }
            if(this.sistemaEmergencia)
            {
                mensaje+= " Sistema de Emergencia, "
            }
            mensaje += this.numTanquesCombustible + " Tanques de Combustible, ";
            mensaje += this.numPuertasSalida + " Puertas de Salida.";
            return mensaje;
        }
    }