//CLASES ECMA SCRIPT 6
 
(() => {  

    const sumar= (a:number, b:number ):number=> a + b
        
       //{} return a +b;}
    
    const nombre = (): string => 'Hola Leo'
    const obtenerSalario = ():Promise<string> => {

        return new Promise (( resolve, reject) => {
            resolve('Leo');
            
        });
    }

    obtenerSalario().then( a=> console.log(a.toUpperCase))


}) ();

