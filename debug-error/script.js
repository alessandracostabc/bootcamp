function validaArray(arr, num){
    try{
        if(!arr && num) throw new ReferenceError("Envie os parâmetros");

        if(typeof arr !== 'object') throw new TypeError("Envie um elemento do tipo Array");

         if(typeof num !== 'number') throw new TypeError("Envie um elemento do tipo number");

        if(arr.length !==num) throw new RangeError("Tamanho do Array inválido");

        return arr;
    } catch(e) {
        if(e instanceof ReferenceError){
            console.log("ReferenceError")
            console.log(e.stack);
                        console.log("passou por aqui");

        } else if(e instanceof TypeError){
            console.log("typeofError")
            console.log(e.stack);
            console.log("passou por aqui");

        } else if(e instanceof RangeError){
            console.log("RangeError")
            console.log(e.stack);
            console.log("passou por aqui");

        } else {
            console.log("Outro tipo de erro");
            console.log(e.stack);
            console.log("passou por aqui");
        }
    }

}

console.log(validaArray([1,2,3],0));

