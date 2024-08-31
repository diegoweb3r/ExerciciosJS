/* Desenvolver um programa que peça ao usuário para digitar diversos números reais, e ao final, exibir o maior e o
menor número que foram digitados, além da média entre TODOS os números digitados pelo usuário. A inserção
de números deve parar quando o usuário digitar o número -1, e este número -1 não deve ser considerado nem
como maior, nem como menor, e nem na contagem da média. */

let maior = 0;
let menor = 1000000;
let numero;
let media = 0;
let i = 0;
let teste = true;

while (teste){
    numero = parseInt(prompt("Digite um numero"));
   
    if(numero == -1){
        teste = false;
    }

    if(numero > maior){
        maior = numero;

    } 
    
    if(numero < menor && numero !== -1){
        menor = numero;
    }

    media += numero;
    i++;
}

alert(`Maior: ${maior}  Menor ${menor}  Media ${media/(i-1)}`)