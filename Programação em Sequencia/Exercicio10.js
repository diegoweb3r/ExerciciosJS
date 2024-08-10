/* Fazer um algoritmo que efetue o cálculo do valor de uma prestação em atraso, utilizando a fórmula 
prestação	=	valor	+	(valor	x	(taxa	:	100)	x	tempo	em	dias). */

let prestacao = parseFloat(prompt("Digite o valor da prestação:"));
let diasAtraso = parseInt(prompt("Quantos dias esta em atraso?"));
let taxa = parseFloat(prompt("Qual a taxa para atrasos?"));

let prestacaoAtualizada = prestacao + (prestacao * (taxa / 100) * diasAtraso);

alert(`A prestação original era de R$${prestacao} e estava em atraso em ${diasAtraso} dias. A taxa de atraso é de ${taxa}% ao dia. Sua parcela atualizada é de: R$${prestacaoAtualizada}`)