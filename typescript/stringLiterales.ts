(function(){   ///funcion autoenvocada de javaScript
///TEMPLATES LITERALES 
/// `` ----> BACK TIPS STRING MULTILINEA
function getEdad(){

  return 100+100 +300;
}


// const salida = nombre + " " + apellido + " ( " + edad + " )";
const nombre = 'Leonardo';
const apellido = 'Gonzalez';
const edad =  33;

const salida = `
${ nombre } 
${ apellido }
(${ getEdad() })`;

console.log(salida);



})();

