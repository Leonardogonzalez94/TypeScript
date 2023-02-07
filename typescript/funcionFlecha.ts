(function () {   ///funcion autoenvocada de javaScript
  const miFuncion= function( a: string ){
    return a.toUpperCase();

  }
  
  const miFuncionF = (a : string ) => a.toUpperCase();
  //console.log(miFuncion('Normal'));
  //console.log(miFuncionF('Flecha')); 

  const sumarN= function(a:number , b:number ){

    return a+b;
  }

  const sumarNFlecha = (a: number , b:number) =>a+b;
    //console.log(sumarN (5,5));
    //console.log(sumarNFlecha(5,5)); 

    const hulk={
      nombre: 'Hulk',
      smach(){
        setTimeout ( () =>{
          console.log(`${ this.nombre } smash!!!`);

        }, 1000);
      }
    
    }
    hulk.smach();


})();

