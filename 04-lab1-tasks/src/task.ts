export class Task {
    constructor(){}
    static esPar(input: number): boolean {
        const validation = input % 2 == 0;
        console.log(`resultado ====> ${validation}`);
        
        return validation;
    
    }

   

}