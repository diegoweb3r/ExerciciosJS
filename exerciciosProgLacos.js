/*Desenvolver um programa que exiba os números de 1 a 100.*/

function exercicio01(){
    let i = 1;

    while (i <= 100){
        console.log(i)
        i++;
    }
}

/* Desenvolver um programa que exiba os números em ordem decrescente de 100 até 1 */

function exercicio02(){
    let i = 100;

    while (i > 0){
        console.log(i)
        i--;    
    }
}

/* Desenvolver um programa que apresente os quadrados dos números inteiros de 15 a 200. */

function exercicio03(){
    let i = 15;

    while (i <= 200){
        console.log(Math.pow(i, 2));
        i++;
    }
}

/* Desenvolver um programa que apresente o valor da soma dos cem primeiros números inteiros (1 + 2 + 3 + 4 + ...
+ 97 + 98 + 99 + 100) */


function exercicio04(){
    let i = 1;
    let soma = 0;
    
    while(i <= 100){
        soma += i;
        i++;
    }
    
    alert(soma)
}

/* Desenvolver um programa que apresente os resultados de uma tabela de um número qualquer. Ela deve ser
impressa no seguinte formato:
Considerando como exemplo o fornecimento do número 2
2 . 1 = 2
2 . 2 = 4
2 . 3 = 6
2 . 4 = 8
2 . 5 = 10
(...)
2 . 10 = 20 */

function exercicio05(){
    let i = 1;
    let tabuada = 5;

    while (i <= 10){
    console.log(tabuada + " . " + i + " = " + tabuada * i)
    i++;
}
}


/* Desenvolver um programa que leia um número n qualquer menor ou igual a 50 e apresente o valor obtido da
multiplicação sucessiva de n por 3 enquanto o produto for menor que 250. (n x 3; n x 3 x 3; n x 3 x 3 x 3 etc...) */


function exercicio06(){
    let n = parseInt(prompt("Digite um numero menor ou igual que 50:"));


    if (n <= 50) {
        while (n < 250) {
            console.log(n);
            n *= 3;
        }
    } else {
        console.log("O número deve ser menor ou igual a 50.");
    } 
}

/* Desenvolver um programa que apresente todos os números divisíveis por 4 que sejam menores que 200. Para
saber se o número é divisível por 4 será necessário verificar a lógica desta condição com o comando if. Sendo
divisível, mostre-o; não sendo, passe para o próximo passo. A variável que controla o contador deve ser iniciada
com valor 1. */


function exercicio07(){
    let i = 1;

    while (i <= 200){
        if (i % 4 == 0){
            console.log(i)
        } 

        i++;
    }
}

/* Desenvolver um programa que apresente todos os valores numéricos inteiros ímpares situados na faixa de 0 a
20. Para saber se o número é ímpar, será necessário verificar essa condição com o comando if. Sendo ímpar,
mostre-o; não sendo, passe para o próximo passo */


function exercicio08(){
    let i = 0;

    while (i <= 20){
        if(i % 2 == 1){
            console.log(i)
        }
    
        i++;
    }    
}
/* Elaborar um programa que apresente no final a soma dos valores pares existentes na faixa de 0 até 500. Utilize
um laço que efetue a variação de 2 em 2. */

function exercicio09(){
    let i = 0;
    let soma = 0;

    while (i <= 500){
    soma += i;
    i = i + 2;
    }

    console.log(soma)
}

/* ) Desenvolver um programa que apresente as potências de 3 variando de 0 a 15. Deve ser considerado que
qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. A apresentação deve observar a seguinte
exibição na tela:
3 elevado à 0 = 1
3 elevado à 1 = 3
3 elevado à 2 = 9
(...)
3 elevado à 15 = 14348907 */

function exercicio10(){
  
    let i = 0;
    potencia = 1;

    while (i <= 15){
        console.log(`3 elevado a ${i} = ${potencia}`);
        potencia *= 3;
        i++;
    }  
}

/* ) Desenvolver um programa que apresente as potências de 3 variando de 0 a 15. Deve ser considerado que
qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. A apresentação deve observar a seguinte
exibição na tela:
3 elevado à 0 = 1
3 elevado à 1 = 3
3 elevado à 2 = 9
(...)
3 elevado à 15 = 14348907 */


function exercicio11(){
    let i = 0;

    while(i <= 15){
    console.log(`3 elevado a ${i} = ` + Math.pow(3, i));
    i++;
    }
}

/* Elaborar um programa que apresente o valor de uma potência de uma base qualquer (Variável b) elevada a um
expoente qualquer (Variável e), ou seja, de be
. (Sem usar Math.pow();) */

function exercicio12(){
    let b = 5;
    let  e = 3;
    let cont = 1;
    let i = 1;

    while (i <= e){
        cont *= b;
        i++ 
    }

    console.log(cont)
}

/* Desenvolver um programa que peça ao usuário para digitar diversos números reais, e ao final, exibir o maior e o
menor número que foram digitados, além da média entre TODOS os números digitados pelo usuário. A inserção
de números deve parar quando o usuário digitar o número -1, e este número -1 não deve ser considerado nem
como maior, nem como menor, e nem na contagem da média. */

function exercicio13(){
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
}

/* Desenvolver um programa que imprima a tabuada de 3 a 6 */

function exercicio14(){
    let i = 0;
    let b = 3;

    while (b <= 6){
        i = 0;
        
        while(i <= 10){
            alert(`${b} . ${i} = ${b*i}`)
            i++;
        }

        b++;

    }
}

/* Desenvolver um programa que calcule o fatorial do número 5, ou seja, 5!. Desta forma, temos que 5! = 5 . 4 . 3 .
2 . 1 ou 5! = 1 . 2 . 3 . 4 . 5, equivalente a 120 */



function exercicio15(){

    let i = 5;
    let fatorial = 1;

    while (i <= 1){
        fatorial *= i;
        i--;
    }
    alert(`5! = ${fatorial}`)
}
