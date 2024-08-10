/*Fazer um programa que pergunte uma temperatura ao usuário, em graus Fahrenheit, e apresente esta
temperatura convertida em graus Celsius. A fórmula da conversão é c	=	(f	–	32)	x	5	:	9	, onde c	 é a temperatura
em graus Celsius e f		em Fahrenheit. */

let temperaturaFahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit: "));
let temperaturaCelsius = (temperaturaFahrenheit - 32) * 5 / 9;

alert(`A temperatura em Fahrenheit é de ${temperaturaFahrenheit} e em Celsius é de ${temperaturaCelsius}`)