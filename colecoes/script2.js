const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet]; // para os eleemntos do set se tornem elemento do array tem que usar tecnica spread (argumento rest). Sem ele está só colocando u set dentro de um array.
}

console.log(valoresUnicos(meuArray));