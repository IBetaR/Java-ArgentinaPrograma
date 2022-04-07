export class Alas{
        private numAlasCortas:number =0;
        private numAlasLargas:number = 0;
        public constructor(a:number,b:number )
        {
            this.numAlasCortas = a;
            this.numAlasLargas = b;
        }
        public ToString()
        {
            return this.numAlasCortas + " Alas Cortas" + "y " + this.numAlasLargas + " Alas Largas,"

        }
    }