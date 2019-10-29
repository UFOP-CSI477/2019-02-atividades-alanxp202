function mudar() {
    document.getElementById("proximo").style.visibility = "visible";
    document.getElementById("botao").style.display = "none";
    console.log("Estive aqui!");
}

function corrigir() {
    var opcoes = document.getElementById("correta").checked;

    console.log(opcoes);
    if (opcoes) {
        document.getElementById("sucesso").style.display = "block";
        document.getElementById("fracasso").style.display = "none";
        mudar();
    } else {
        document.getElementById("fracasso").style.display = "block";
        document.getElementById("sucesso").style.display = "none";
    }
}