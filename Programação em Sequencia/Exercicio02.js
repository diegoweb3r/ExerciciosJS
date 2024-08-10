/*Elaborar um programa que pergunte quatro valores inteiros e apresente 2 resultados:
a) Resultado de suas adições
b) Resultado de suas multiplicações */

let valor1 = parseInt(prompt("Digite o primeiro valor inteiro:"));
let valor2 = parseInt(prompt("Digite o segundo valor inteiro:"));
let valor3 = parseInt(prompt("Digite o terceiro valor inteiro:"));
let valor4 = parseInt(prompt("Digite o quarto valor inteiro:"));

let soma = valor1 + valor2 + valor3 + valor4;
let multiplicações = valor1 * valor2 * valor3 * valor4;

alert(`Os valores digitados foram: ${valor1}, ${valor2}, ${valor3}, ${valor4}. A soma dos valores é ${soma} e a multiplicação é ${multiplicações}`);