public class Persona {
//Atributos
private int id;
private String nombre;
private int edad;
//Constructor por defecto
        public Persona(){
                
        }
  //Constructor con parametos
 public Persona(int valorID,String valorNombre, int valorEdad ){
   id =valorID;
   nombre=valorNombre;
   edad= valorEdad;                
 }
// Atributos de la clase
   public void setID (int valorid) {
        id = valorid;
    } 
    public int getID() { 
      return id; 
    } 
     public void setNombre (String valorNombre) {
        nombre = valorNombre;

    } 
    public String getNombre () { 
      return nombre; 
    } 
     public void setEdad (int valorEdad) {
        edad = valorEdad;
    } 
    public int getEdad() { 
      return edad; 
    } 
}