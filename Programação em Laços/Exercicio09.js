/* Elaborar um programa que apresente no final a soma dos valores pares existentes na faixa de 0 até 500. Utilize
um laço que efetue a variação de 2 em 2. */

let i = 0;
let soma = 0;

while (i <= 500){
    soma += i;
    i = i + 2;
}

console.log(soma)
