/* Elaborar um programa que apresente o valor de uma potência de uma base qualquer (Variável b) elevada a um
expoente qualquer (Variável e), ou seja, de be
. (Sem usar Math.pow();) */

let b = 5;
let  e = 3;
let cont = 1;
let i = 1;

while (i <= e){
    cont *= b;
    i++ 
}

console.log(cont)