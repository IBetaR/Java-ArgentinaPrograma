export class Helice {
        private cantHelices:number =0;
        public constructor(c:number)
        {
            this.cantHelices = c;
        }
        public ToString()
        {
            return "Helice/s: " + this.cantHelices + " hélices"+'\n';
        }
}
