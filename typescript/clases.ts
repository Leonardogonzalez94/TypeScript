//CLASES ECMA SCRIPT 6
 
(() => {   ///funcion autoenvocada de javaScript

    class Avenger{
     // nombre: string= 'Sin nombre';
      //equipo: string;
      //nombreReal?: string;
      //puedePelear?:boolean;
      //peleasGanadas?: string;

     // constructor(nombre:string, equipo:string){   //es una función de una función
       //    this.nombre=nombre;   ///ARGUMENTO 
         //  this.equipo=equipo;
           //this.nombreReal=nombreReal;
           //this.puedePelear=puedePelear;
           //this.peleasGanadas=peleasGanadas;
        //}


    //}
   constructor(public nombre: string,
    public equipo: string,
    public nombreReal?: string,
    public puedePelear: boolean=true,   
    public peleasGanadas: number=0, ){}
}

      
//INICIALIZACIÓN DE LA CLASE 
    const antman: Avenger =new Avenger('Antman', 'Capi');
    console.log(antman)

}) ();

