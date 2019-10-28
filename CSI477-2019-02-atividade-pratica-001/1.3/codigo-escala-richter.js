function calcular() {
    var amplitude = document.dados.infoAmpl.value;
    var tempo = document.dados.infoTempo.value;
    var resultado;

    resultado = Math.log10(amplitude) + 3 * (Math.log10(8 * tempo)) - 2.92;

    document.dados.magnetude.value = resultado.toPrecision(2) + " na escala Richter";

    if (resultado < 3.5) {
        document.dados.efeitos.value = "Geralmente não sentido, mas gravado.";
    } else if (resultado >= 3.5 && resultado <= 5.4) {
        document.dados.efeitos.value = "Às vezes sentido, mas raramente causa danos.";
    } else if (resultado >= 5.5 && resultado <= 6) {
        document.dados.efeitos.value = "No máximo causa pequenos danos a prédios bem construídos, mas pode danificar seriamente casas mal construídas em regiões próximas.";
    } else if (resultado >= 6.1 && resultado <= 6.9) {
        document.dados.efeitos.value = "Pode ser destrutivo em áreas em torno de até 100 km do epicentro.";
    } else if (resultado >= 7 && resultado <= 7.9) {
        document.dados.efeitos.value = "Grande terremoto. Pode causar sérios danos numa grande faixa.";
    } else if (resultado >= 8) {
        document.dados.efeitos.value = "Enorme terremoto. Pode causar graves danos em muitas áreas mesmo que estejam a centenas de quilômetros.";
    }

}