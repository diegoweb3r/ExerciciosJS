/* Desenvolver um programa que imprima a tabuada de 3 a 6 */

let i = 0;
let b = 3;

while (b <= 6){
    i = 0;
    
    while(i <= 10){
        console.log(`${b} . ${i} = ${b*i}`)
        i++;
    }

    b++;

}