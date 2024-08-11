/* Desenvolver um programa que leia um número n qualquer menor ou igual a 50 e apresente o valor obtido da
multiplicação sucessiva de n por 3 enquanto o produto for menor que 250. (n x 3; n x 3 x 3; n x 3 x 3 x 3 etc...) */

let n = parseInt(prompt("Digite um numero menor ou igual que 50:"));


    if (n <= 50) {
        while (n < 250) {
            console.log(n);
            n *= 3;
        }
    } else {
        console.log("O número deve ser menor ou igual a 50.");
    }

    