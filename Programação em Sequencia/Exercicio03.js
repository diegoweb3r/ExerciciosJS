/* Fazer um programa que pergunte um valor em Dólares e apresente o equivalente em Reais. Considere U$1,00 =
R$3,80 */

const real = 3.80;
let valorEmDolar = parseFloat(prompt("Digite um valor em dolar:"));
let cotacao = real * valorEmDolar

alert(`O valor digitado foi $${valorEmDolar} e o equivalente em real na cotacao de R$${real} é: R$${cotacao}`)
