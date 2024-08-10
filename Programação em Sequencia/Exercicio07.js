/*Fazer um algoritmo que pergunte 3 números e apresente a média aritmética entre estes 3 números. */

let numero1 = parseFloat(prompt("Digite o primeiro numero: "));
let numero2 = parseFloat(prompt("Digite o segundo numero: "));
let numero3 = parseFloat(prompt("Digite o terceiro numero: "));
let media = (numero1 + numero2 + numero3) / 3;

alert(`Os numeros digitados foram: ${numero1}, ${numero2} e ${numero3}. A média aritmetica é ${media}.`)