/* 01 Desenvolver um programa que pergunte ao usuário o seu nome completo e seu sexo. Em seguida, o programa
deve apresentar os dados anteriormente informados. */



function exercicio01() {
  let nome = prompt("Qual seu nome?");
  let sexo = prompt("Qual seu sexo?");

  alert(`Seu nome é ${nome} e seu sexo é ${sexo}`);
}

/*Elaborar um programa que pergunte quatro valores inteiros e apresente 2 resultados:
a) Resultado de suas adições
b) Resultado de suas multiplicações*/

function exercicio02() {
  let valor1 = parseInt(prompt("Digite o primeiro valor inteiro:"));
  let valor2 = parseInt(prompt("Digite o segundo valor inteiro:"));
  let valor3 = parseInt(prompt("Digite o terceiro valor inteiro:"));
  let valor4 = parseInt(prompt("Digite o quarto valor inteiro:"));

  let soma = valor1 + valor2 + valor3 + valor4;
  let multiplicações = valor1 * valor2 * valor3 * valor4;

  alert(
    `Os valores digitados foram: ${valor1}, ${valor2}, ${valor3}, ${valor4}. A soma dos valores é ${soma} e a multiplicação é ${multiplicações}`
  );
}

/*Fazer um programa que pergunte um valor em Dólares e apresente o equivalente em Reais. Considere U$1,00 =
R$3,80.*/

function exercicio03() {
  const real = 3.8;
  let valorEmDolar = parseFloat(prompt("Digite um valor em dolar:"));
  let cotacao = real * valorEmDolar;

  alert(
    `O valor digitado foi $${valorEmDolar} e o equivalente em real na cotacao de R$${real} é: R$${cotacao}`
  );
}

function exercicio04() {
  let numero = parseInt(prompt("Digite um numero:"));
  let antecessor = numero - 1;
  let sucessor = numero + 1;

  alert(
    `O numero digitado foi o ${numero}. Seu antecessor é o ${antecessor} e seu sucessor é o ${sucessor}`
  );
}

function exercicio05() {
  let aumento = 0.15;
  let salario = parseFloat(prompt("Qual o seu salario?"));
  let salarioAjustado = salario + salario * aumento;

  alert(
    `O seu salario era de R$ ${salario}. Seu novo salario após ajuste é de R$ ${salarioAjustado}`
  );
}

function exercicio06() {
  let temperaturaFahrenheit = parseFloat(
    prompt("Digite a temperatura em Fahrenheit: ")
  );
  let temperaturaCelsius = ((temperaturaFahrenheit - 32) * 5) / 9;

  alert(
    `A temperatura em Fahrenheit é de ${temperaturaFahrenheit} e em Celsius é de ${temperaturaCelsius}`
  );
}

function exercicio07() {
  let numero1 = parseFloat(prompt("Digite o primeiro numero: "));
  let numero2 = parseFloat(prompt("Digite o segundo numero: "));
  let numero3 = parseFloat(prompt("Digite o terceiro numero: "));
  let media = (numero1 + numero2 + numero3) / 3;

  alert(
    `Os numeros digitados foram: ${numero1}, ${numero2} e ${numero3}. A média aritmetica é ${media}.`
  );
}

function exercicio08() {
    let distancia = parseFloat(prompt("Digite a distancia, em quilometros, a percorrer:"));
let valorConsumoMedio = parseFloat(prompt("Digite o consumo medio, em quilometros, do veiculo:"))
let qtdLitros = distancia / valorConsumoMedio;

alert(`Voce vai percorrer ${distancia}Km e consumira cerca de ${qtdLitros}lts de gasolina.`)
}

function exercicio09() {
    let numero = parseFloat(prompt("Digite um numero:"));
let numeroQuadrado = Math.pow(numero, 2);
let numeroRaiz = Math.sqrt(numero);

alert(`O numero digitado foi: ${numero}. O numero ao quadrado é ${numeroQuadrado} e a raiz quadrada é ${numeroRaiz}`)
}

function exercicio10() {
  let prestacao = parseFloat(prompt("Digite o valor da prestação:"));
let diasAtraso = parseInt(prompt("Quantos dias esta em atraso?"));
let taxa = parseFloat(prompt("Qual a taxa para atrasos?"));
let prestacaoAtualizada = prestacao + (prestacao * (taxa / 100) * diasAtraso);
alert(`A prestação original era de R$${prestacao} e estava em atraso em ${diasAtraso} dias. A taxa de atraso é de ${taxa}% ao dia. Sua parcela atualizada é de: R$${prestacaoAtualizada}`)
}
