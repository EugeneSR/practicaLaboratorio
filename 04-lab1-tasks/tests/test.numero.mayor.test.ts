
import { TaskNumeroMayor } from '../src/task.numero.mayor';

test('task 2: Retorna el numero mayor de un Array', () => {
    //TDD 
    const input = [2, 88, 65, 17, 95, 39];  //Array de numeros
 
    //actual
    const actual = TaskNumeroMayor.elNumeroMayor(input);
    

    //expected numero mayor del array
    const expc = 95;


    expect(actual).toEqual(expc);
   
});

