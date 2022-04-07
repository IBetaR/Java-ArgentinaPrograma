export class Turbinas{
        private numTurbinas:number =0;
        public constructor(n:number)
        {
            this.numTurbinas = n;
        }
        public ToString()
        {
            return this.numTurbinas + "Turbina/s"
        }
    }