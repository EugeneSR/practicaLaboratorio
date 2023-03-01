//  any puede inferir cualquier tipo de dato, es mala practica usarlo
// ------- No usar----------

let array4: any[] = [];
array4.push(1);
array4.push('');
array4.push({});

array4 =  [true, 15 , 89];

let ranText: any = 'abcdd';
const rr = ranText as string;
const rr1 = <string>ranText;

function sumNumbs(a: any, b: any){
    const resp =a + b;
    console.log(resp);
    if (typeof a === 'string') 
    {
        console.log("Es String:  ", resp);
    }
}

sumNumbs(1, 2);
sumNumbs("Es", true);
