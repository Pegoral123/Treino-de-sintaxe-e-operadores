function index() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    var resultado = frases(num1, num2)

    document.getElementById("resposta").innerHTML = resultado
}


function frases(num1, num2) {
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1, num2) {
    let frase = `os numero ${num1} e ${num2}`
    let simNao = "não"

    if (num1 === num2) {
        simNao = ""
    }

    return `${frase} ${simNao} são igual`
}

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;

    let compara10 = "menor"
    let compara20 = "menor"

    if (soma > 10) {
        compara10 = "maior"
    }

    if (soma > 20) {
        compara20 = "maior"
    }

    return `Sua soma é ${soma}, que é ${compara10} do que 10 e ${compara20} do que 20.`;
}