/* Fazer um programa que calcule e apresente a quantidade de litros que um automóvel gastará em uma viagem. O
programa deve coletar as seguintes informações: Distância a percorrer na viagem, em quilômetros; qual é o
valor do consumo médio do automóvel, em quilômetros por litro. */

    let distancia = parseFloat(prompt("Digite a distancia, em quilometros, a percorrer:"));
    let valorConsumoMedio = parseFloat(prompt("Digite o consumo medio, em quilometros, do veiculo:"))
    let qtdLitros = distancia / valorConsumoMedio;

    alert(`Voce vai percorrer ${distancia}Km e consumira cerca de ${qtdLitros}lts de gasolina.`)