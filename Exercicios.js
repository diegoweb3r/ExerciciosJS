function lista01Exercicio01 () {

    alert("Desenvolver um programa que pergunte ao usuário o seu nome completo e seu sexo. Em seguida, o programa deve apresentar os dados anteriormente informados")

    let nome  = prompt("Qual seu nome?")
    let sexo = prompt("Qual seu sexo?")

    alert(`Seu nome é ${nome} e seu sexo é ${sexo}`)
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('l01e01').addEventListener('click', lista01Exercicio01);
});
