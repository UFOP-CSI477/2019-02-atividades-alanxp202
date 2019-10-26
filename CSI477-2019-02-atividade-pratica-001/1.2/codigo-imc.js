function calcular(){
    let altura = document.dados.infoAlt;
    let peso = document.dados.infoPeso;

    let resultado = (peso.value/(altura.value*altura.value));
    
    document.dados.imc.value = resultado;
    console.log(resultado.value);

}