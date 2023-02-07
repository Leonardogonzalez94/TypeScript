//Desestructuración de objetos y arreglos

( ()=> {   ///funcion autoenvocada de javaScript
  
  const avenger ={
   nombre: 'Steve',
   clave: 'Capitan America',
   poder: 'Escudo'

  }
  
  const extraer = ( { nombre, poder }: any )=>{    ///{ nombre, poder} --->argumento

    //console.log(nombre);
    //console.log(poder);
  }
  extraer( avenger );



  /*const avengers ={
    nombre: 'Steve',
    clave: 'Capitan America',
    poder: 'Escudo'
 
   }
   
  const { nombre, poder } = avengers; 
  console.log(nombre);
  console.log(poder);*/


  ////ARREGLOS////////

   const avengers: string [] = ['Thor', 'Ironman', 'Spiderman'];  //arreglo tipo String

   const [ , , arana ] = avengers; 

   //console.log(avengers[0]);
   //console.log(avengers[1] ) ;
   ///console.log( avengers[2] );
   
   // console.log(loki);
   //console.log(hombre ) ;
   // console.log( arana );

   const avengeres: string [] = ['Thor', 'Ironman', 'Spiderman'];  //arreglo tipo String

   const [ , , spider] = avengeres; 

   const extraerArr= ( [thor, ironman,spiderman] : string[])=>{    ///{ nombre, poder} --->argumento

    console.log(thor);
    console.log(ironman);
    console.log( spiderman );
  }
  extraerArr( avengeres );
   
   
   
   



})();

