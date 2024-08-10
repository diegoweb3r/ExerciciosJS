/*Fazer um programa que pergunte um número inteiro e apresente o seu antecessor e seu sucessor. */


let numero = parseInt(prompt("Digite um numero:"));
let antecessor = numero - 1;
let sucessor = numero + 1;

alert(`O numero digitado foi o ${numero}. Seu antecessor é o ${antecessor} e seu sucessor é o ${sucessor}`)