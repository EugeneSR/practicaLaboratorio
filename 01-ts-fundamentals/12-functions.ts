/*---------Funciones manejan una logica segun los parametros enviados-----*/
function nameFunction(param1: string, param2: number = 77): string {
    console.log(`${param1}   ${param2}`);
    return `${param1}   ${param2}`;
}


console.log(nameFunction('jjjj'));