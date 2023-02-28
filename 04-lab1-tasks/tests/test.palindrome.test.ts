import { TaskPalindrome  } from '../src/task.palindrome';
test('task 1: Valida si el texto es palindrome', () => {
    //TDD 
    const input = "ANA LAVA LANA" ;  //Texto para validar
 
    //actual
    const actual = TaskPalindrome.esPalindromo(input);
    

    //expected True es Palindromo
    const expc = true;

    expect(actual).toEqual(expc);
   
});

