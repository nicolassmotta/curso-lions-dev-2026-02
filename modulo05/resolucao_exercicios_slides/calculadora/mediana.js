import numeros from './numeros.js';

function calcularMediana(){
    let mediana = 0;

    if(numeros.length === 0){
        return "A lista está vazia.";
    }
    
    const ordenados = numeros.slice().sort((a, b) => a - b);
    const meio = Math.floor(ordenados.length / 2);

    //console.table(ordenados);

    if (ordenados.length % 2 === 0) { 
        mediana = (ordenados[meio - 1] + ordenados[meio]) / 2;
    } else {
        mediana = ordenados[meio];
    }
    return mediana;
}

export default calcularMediana;