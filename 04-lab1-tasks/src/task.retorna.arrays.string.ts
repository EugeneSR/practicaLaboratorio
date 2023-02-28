export class TaskArrayString {
    constructor(){}

    static retornaArrayString(input: string ): Array<String>{  
    
        let cadena: string=input;
        cadena=cadena.replace(/ /g,"");
        let array:string []=[];
        
        for (let i:number = 0; i < cadena.length; i++) {
            array= cadena.split("");
        }
        console.log(array);
        return array;
        
    }
    

}