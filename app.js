"use strict";
//CLASES ECMA SCRIPT 6
(() => {
    const sumar = (a, b) => a + b;
    //{} return a +b;}
    const nombre = () => 'Hola Leo';
    const obtenerSalario = () => {
        return new Promise((resolve, reject) => {
            resolve('Leo');
        });
    };
    obtenerSalario().then(a => console.log(a.toUpperCase));
})();
