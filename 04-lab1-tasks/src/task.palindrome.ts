export class TaskPalindrome {
    constructor(){}

    static esPalindromo(input: string): boolean {  
    
        let i: number;
        let j: number;
        
        let _espalindromo: boolean = true;
        let palindromo: String = input;
        
        palindromo = palindromo.replace(/ /g,"");
        palindromo = palindromo.toLowerCase();
        
        i =0;
        j= palindromo.length -1;
        
        while ((i<j) && _espalindromo){
        if (palindromo.charAt(i) !== palindromo.charAt(j)){
            _espalindromo=false;
        
            }
            i++; 
            j--;
        
        }
        
        if(_espalindromo){
           
            console.log(`Palindromo es = ${_espalindromo}`);
        }else{
        
            
            console.log(`Palindromo es = ${_espalindromo}`);
        }
        return _espalindromo;
    }
    

}