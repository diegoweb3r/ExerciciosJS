/* Fazer um algoritmo que pergunte 1 número e apresente:
a) O próprio número
b) O quadrado deste número
c) A raiz quadrada deste número */

let numero = parseFloat(prompt("Digite um numero:"));
let numeroQuadrado = Math.pow(numero, 2);
let numeroRaiz = Math.sqrt(numero);

alert(`O numero digitado foi: ${numero}. O numero ao quadrado é ${numeroQuadrado} e a raiz quadrada é ${numeroRaiz}`)