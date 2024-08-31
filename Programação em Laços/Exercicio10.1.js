/* ) Desenvolver um programa que apresente as potências de 3 variando de 0 a 15. Deve ser considerado que
qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. A apresentação deve observar a seguinte
exibição na tela:
3 elevado à 0 = 1
3 elevado à 1 = 3
3 elevado à 2 = 9
(...)
3 elevado à 15 = 14348907 */

let i = 0;
potencia = 1;

while (i <= 15){
    console.log(`3 elevado a ${i} = ${potencia}`);
    potencia *= 3;
    i++;
}