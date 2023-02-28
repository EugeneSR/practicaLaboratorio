
import { TaskArrayString } from '../src/task.retorna.arrays.string';

test('task 3: Retorna un array de string, a partir de un texto', () => {
    //TDD 
    const input = "Hello"; //Texto (String)
 
    //actual
    const actual = TaskArrayString.retornaArrayString(input);
    

    //expected Array de String 
 
    const expc = ['H', 'e', 'l', 'l', 'o'];


    expect(actual).toEqual(expc);
   
});

