import { Aeroplano } from "./Aeroplano";
import { Alas } from "./Alas";
import { Cabina } from "./Cabina";
import { Helice } from "./Hélice";
import { Turbinas } from "./Turbina";

let h:Helice = new Helice(4);
let c:Cabina = new Cabina (true,false,true,5,2);
let t:Turbinas = new Turbinas(1);
let a:Alas = new Alas(2,2);

let ar:Aeroplano = new Aeroplano(h,t,c,a,a)

console.log(ar.toString());