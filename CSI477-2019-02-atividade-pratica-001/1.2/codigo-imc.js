function calcular() {
    let altura = document.dados.infoAlt;
    let peso = document.dados.infoPeso;

    let resultado = (peso.value / Math.pow(altura.value, 2));
    let pesoMin = (Math.pow(altura.value, 2) * 18.5);
    let pesoMax = (Math.pow(altura.value, 2) * 24.9);

    if (isNaN(resultado)) {

        document.dados.pesoIdeal.value = "Digite um valor numérico!";
        document.dados.situacao.value = "Digite um valor numérico!";
        document.dados.imc.value = "Digite um valor numérico!";
        return;
    }

    document.dados.pesoIdeal.value = ("Peso ideal entre " + pesoMin.toPrecision(2) + " e " + pesoMax.toPrecision(2) + " kg");
    document.dados.imc.value = resultado.toPrecision(2);
    if (resultado < 18.5) {
        document.dados.situacao.value = "Subnutrição!";
    } else if (resultado >= 18.5 && resultado < 25) {
        document.dados.situacao.value = "Peso Saldável!";
    } else if (resultado >= 25 && resultado < 30) {
        document.dados.situacao.value = "Sobrepeso!";
    } else if (resultado >= 30 && resultado < 35) {
        document.dados.situacao.value = "Obesidade grau 1!";
    } else if (resultado >= 35 && resultado < 40) {
        document.dados.situacao.value = "Obesidade grau 2!";
    } else {
        document.dados.situacao.value = "Obesidade grau 3!";
    }

}

function trocar() {
    let palavra = document.dados.infoAlt.value;

    palavra = palavra.replace(/,/g, ".");
    console.log(palavra);
    document.dados.infoAlt.value = palavra;
}