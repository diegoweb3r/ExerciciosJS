/* Desenvolver um programa que apresente o valor da soma dos cem primeiros números inteiros (1 + 2 + 3 + 4 + ...
+ 97 + 98 + 99 + 100) */

let i = 1;
let soma = 0;

while(i <= 100){
    soma += i;
    i++;
}

console.log(soma)