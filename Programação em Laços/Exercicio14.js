/* Desenvolver um programa que calcule o fatorial do número 5, ou seja, 5!. Desta forma, temos que 5! = 5 . 4 . 3 .
2 . 1 ou 5! = 1 . 2 . 3 . 4 . 5, equivalente a 120 */

let i = 5;
let fatorial = 1;

while (i <= 1){
    fatorial *= i;
    i--;
}

console.log(`5! = ${fatorial}`)