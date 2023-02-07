(function () {   ///funcion autoenvocada de javaScript
  function activar(quien: string,   //parametro obligatorio
                   momento?: string,  ///parametro opcional
                   objeto: string = 'batiseñal') {   //parametro por defecto
    if (momento) {
        console.log(`${ quien } activo la ${ objeto } en la ${ momento }.`); 

    }else{
      console.log(`${ quien } activó la ${ objeto }.`);
    }
  }
  activar('Gordon', 'tarde')

})();

