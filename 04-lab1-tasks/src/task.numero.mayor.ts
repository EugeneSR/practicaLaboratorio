export class TaskNumeroMayor {
    constructor(){}

    static elNumeroMayor(input: number[] ): Number {  
    
        let arrayNumeros: number[] = input ;//[2, 88, 65, 17, 95, 39];
        let numeroMayor:number= arrayNumeros[0];
        
        for (let i = 1; i < arrayNumeros.length; i++) {
            if(arrayNumeros[i] >numeroMayor){
                numeroMayor = arrayNumeros[i];
        
            }
           
        }
        
        console.log(`El numero mayor en el arreglo es: ${numeroMayor}`);
        return numeroMayor;
    }
    

}