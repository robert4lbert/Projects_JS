
var resultIMC;
const MSG_ERRO_DADOS = "Preencha os dados acima!"
const MSG_ERRO_FAIXA_IMC = "Erro ao Calcular Faixa IMC"
const resultado = document.getElementById("resultado");
const calcular = document.getElementById("calcular");
calcular.addEventListener('click', IMC);


function IMC() {
    let nome = document.getElementById("nome").value;
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    if (nome != "" && altura != "" && peso != "") {
        let valueIMC = calcIMC(peso, altura)
        let strfaixaIMC = faixaIMC(valueIMC)
        let strResultado = 'Faixa de IMC: ' + strfaixaIMC  + ' -  Cálculo do IMC: ' + valueIMC + ''
        resultado.textContent = strResultado
    }
    else {
        resultado.textContent = MSG_ERRO_DADOS
    }
}

function calcIMC(intPeso, intAltura) {
    resultIMC = (intPeso / (intAltura * intAltura)).toFixed(1);
    return parseInt(resultIMC);
}

function faixaIMC(valorIMC) {
    let faixaClassificacao = "";
    if (valorIMC < 18.5) {
        faixaClassificacao = 'Magreza';
    } else if (valorIMC >= 18.5 && valorIMC <= 24.9) {
        faixaClassificacao = 'Normal';
    } else if (valorIMC >= 25 && valorIMC <= 30) {
        faixaClassificacao = 'Sobrepeso';
    } else if (valorIMC > 30) {
        faixaClassificacao = 'Obesidade';
    } else {
        faixaClassificacao = MSG_ERRO_FAIXA_IMC;
    }
    return faixaClassificacao
}
