//Lista 4.1

/*Desenvolver um programa que pergunte um número. Se este número for maior que 20, então ele deverá exibir a 
metade deste número, senão, ele deverá exibir o número sem alterações. */
function exercicio01(){
    let numero = parseFloat(prompt("Digite um numero:"))

    if (numero > 20){
        alert("A metade do numero digitado é " + (numero/2))
    } else{
        alert("O numero digitado é " + numero)
    }
}

/*Desenvolver um programa que permita ao aluno responder qual a capital do Brasil. O programa deverá exibir se 
a resposta está certa ou errada. */
function exercicio02(){
    let capital = prompt("Digite a capital do Brasil");

    if(capital.toLocaleUpperCase == BRASILIA){
        alert("Sua resposta esta correta")
    } else{
        alert("Sua resposta esta errada")
    }


}

/*Desenvolver um programa que pergunte um número, e apresente como resposta se o referido número é par ou 
é ímpar.  */
function exercicio03(){
    let numero = parseFloat(prompt("Digite um numero"))

    if(numero % 2 == 0){
        alert("O numero " + numero + "é par")
    } else{
        alert("O numero " + numero + "é impar")
    }
}

/*Desenvolver  um  programa  que  pergunte  um  valor  numérico  inteiro  e  faça  a  exibição  desse  valor  caso  seja 
divisível por 4 e 5. Não sendo divisível por 4 e 5, o programa deverá exibir a mensagem “Valor não é divisível por 
4 e 5”. */
function exercicio04(){
    let numero = parseInt(prompt("Digite um numero inteiro"))

    if(numero % 4 == 0 && numero % 5 == 0){
        alert("O numero é divisivel por 4 ou 5")
    } else{
        alert("O valor não é divisivel por 4 e 5")
    }
}

/*Desenvolver um programa que pergunte 4 notas escolares de um aluno e exiba mensagem informando que o 
aluno  foi  aprovado  se  a  média  escolar  for  maior  ou  igual  a  5.  Se  o  aluno  não  foi  aprovado,  indicar  uma 
mensagem informando essa condição. Apresentar junto com a mensagem de aprovação ou reprovação o valor 
da média obtida pelo aluno. */
function exercicio05(){
    let nota1 = parseFloat(prompt("Digite a primeira nota: "))
    let nota2 = parseFloat(prompt("Digite a segunda nota: "))
    let nota3 = parseFloat(prompt("Digite a terceira nota: "))
    let nota4 = parseFloat(prompt("Digite a quarta nota: "))
    media = (nota1 + nota2 + nota3 + nota4) / 4

    if(media >= 5){
        alert("O aluno foi aprovado com média " + media)
    } else {
        alert("O aluno foi reprovado com média " + media)
    }

}

/*Desenvolver um programa que pergunte dois valores numéricos inteiros e apresente o valor da diferença entre o 
maior valor e o menor valor lido. */
function exercicio06(){
    let numero1 = parseInt(prompt("Digite um numero"))
    let numero2 = parseInt(prompt("Digite outro numero"))

    if(numero1 > numero2){
        alert("O maior numero digitado foi " + numero1 +" e o menor foi " + numero2 + " e a diferenca entre eles é de " + (numero1 - numero2))
    } else{
        alert("O maior numero digitado foi " + numero2 +" e o menor foi " + numero1 + " e a diferenca entre eles é de " + (numero2 - numero1))
    }
}
 
/*Desenvolver um programa que pergunte um valor inteiro positivo ou negativo, e exiba como resposta o módulo 
deste valor, ou seja, o número lido como sendo positivo.*/
function exercicio07(){
    let numero = parseInt(prompt("Digite um valor"))

    if(numero >= 0){
        alert("O valor digitado foi" + numero)
    } else{
        alert("O valor digitado foi " + (-numero))
    }
}

/*Desenvolver um programa que pergunte um número inteiro qualquer e verifique se ele está na faixa de 1 a 10. */
function exercicio08(){
    let numero = parseInt(prompt("Digite um numero de 1 a 10"))
    if(numero < 1 || numero > 10){
        alert("Voce digitou um numero fora do intervalo solicitado")
    } else{
        alert("Voce digitou o numero: " + numero)
    }
}

/* Desenvolver um programa que pergunte um número e exiba a informação de que ele é positivo, negativo ou 
nulo.*/ 
function exercicio09(){
    let numero = parseInt(prompt("Digite um numero"))

    if(isNaN(numero)){
        alert("Valor digitado invalido")
    } else if (numero < 0){
        alert("O numero digitado foi: " + numero + " e ele é negativo")
    }
    else if (numero >= 0){
        alert("O numero digitado foi: " + numero + " e ele é positivo")
    }
}

/*Desenvolver  um  programa  que  pergunte  dois  números  inteiros,  e  apresente  como  resultado  se  o  segundo 
número informado é ou não um divisor do primeiro número informado. */
function exercicio10(){
    let numero1 = parseInt(prompt("Digite um numero: "))
    let numero2 = parseInt(prompt("Digite outro numero: "))

    if(numero2 % numero1 == 0){
        alert("O numero: " + numero2 + " é divisivel por " + numero1)
    } else{
        alert("O numero: " + numero2 + " não é divisivel por " + numero1)
    }
}
 
/*Desenvolver  um  programa  que  pergunte  um  número  de  3  casas  e  apresente  como  resultado  somente  o 
algarismo das centenas.*/
function exercicio11(){
    let numero = parseFloat(prompt("Digite um numero: "))
    let centena

    if(numero < 100 || numero > 1000){
        alert("Numero digitado não contém 3 digitos")
    } else{
        centena = numero / 100
    }
    
}
 
/*Desenvolver um programa que pergunte 5 números inteiros e identifique o maior número e o menor número. 
 
/*Desenvolver um programa que pergunte 3 valores (variáveis a, b e c) e ao final apresente-os dispostos em ordem 
crescente.*/