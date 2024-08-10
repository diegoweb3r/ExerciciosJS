/*Fazer um programa que pergunte o salário de um funcionário e apresente este salário com um aumento de 15%. */

let aumento = 0.15;
let salario = parseFloat(prompt('Qual o seu salario?'));
let salarioAjustado = salario + (salario * aumento);

alert(`O seu salario era de R$ ${salario}. Seu novo salario após ajuste é de R$ ${salarioAjustado}`)