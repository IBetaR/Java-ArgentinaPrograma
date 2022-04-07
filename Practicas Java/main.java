import java.util.*;
class Main {
  public static void main(String[] args) {
    // Crear la lista
    List<Persona> listaPersonas = new ArrayList<Persona>();
    listaPersonas.add(new Persona(1,"ibr",36));
    listaPersonas.add(new Persona(1,"Lucy",12));
    listaPersonas.add(new Persona(1,"Guillermo",54));
    listaPersonas.add(new Persona(1,"Luisina",29));
    System.out.println("En la lista hay: "+ listaPersonas.size());

System.out.println("Recorriendo la lista y mostrar el nombre y los años *************");
    //Opcion 1 - Recorrer la Lista y mostrar el nombre
    for(Persona abc : listaPersonas){
      
      System.out.println("Nombre: " + abc.getNombre()+ " de " + abc.getEdad()+ " Años");
    }
    

    //Opcion 2 - Recorrer la Lista y ver los id de objetos
System.out.println("Recorriendo la lista y mostrar objetos ********************");
    for(int i=0; i<listaPersonas.size();i++ ){
      System.out.println("Persona: " + listaPersonas.get(i));
    }
   System.out.println("Fin**************************************************************");
  }
}
