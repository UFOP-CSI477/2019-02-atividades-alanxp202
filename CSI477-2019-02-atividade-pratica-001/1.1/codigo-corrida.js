var obj = { posicao: 0, largada: 0, competidor: "", tempo: -1, resutado: "" };
var tempos = [obj, obj, obj, obj, obj, obj];

function adicionar() {
    table = document.getElementById("tabela");

    let i = 1;
    let largada;
    let competidor;
    let tempo;

    largada = document.entrada.infoLargada.value;
    competidor = document.entrada.infoNome.value;
    tempo = document.entrada.infoTempo.value;

    try {
        table.rows[largada].cells[1].innerHTML = largada;
        table.rows[largada].cells[2].innerHTML = competidor;
        table.rows[largada].cells[3].innerHTML = tempo;

        let teste = { posicao: 0, largada: largada, competidor: competidor, tempo: tempo, resutado: "" };
        tempos[largada - 1] = teste;

        i++;
    } catch (SyntaxError) {
        largada = document.entrada.infoLargada.value = "Insira um Valor entre 1 a 6!";
        tempo = document.entrada.infoTempo.value = "Insira o Tempo em Segundos!";
    }
}

function apurar() {
    let i, j, z = 1;
    let ordem = [];

    try {
        table.rows[0].cells[0].innerHTML = "Posição";
        table.rows[0].cells[4].innerHTML = "Resultado";
        for (i = 0; i < 6; i++) {
            if (tempos[i].tempo > 0)
                ordem.push(parseInt(tempos[i].tempo));
        }
        ordem = ordem.sort();

        for (i = 0; i < 6; i++) {
            if (ordem[i] == ordem[i + 1]) {
                z++;
            } else
                break;
        }

        for (i = 0; i < ordem.length; i++) {
            for (j = 0; j < tempos.length; j++) {

                if (ordem[i] == tempos[j].tempo) {
                    table.rows[i + 1].cells[0].innerHTML = i + 1;
                    table.rows[i + 1].cells[1].innerHTML = tempos[j].largada;
                    table.rows[i + 1].cells[2].innerHTML = tempos[j].competidor;
                    table.rows[i + 1].cells[3].innerHTML = tempos[j].tempo;
                    if (z > 0) {
                        table.rows[i + 1].cells[4].innerHTML = "Vencedor (a)!";
                        z--;
                    } else if (z = 0) {
                        table.rows[i + 1].cells[4].innerHTML = "Vencedor (a)!";
                    } else {
                        table.rows[i + 1].cells[4].innerHTML = "-";
                    }
                    tempos[j] = obj;
                    break;
                }

            }
        }
    } catch (ReferenceError) {
        document.entrada.infoLargada.value = "Insira valores na tabela";
        document.entrada.infoNome.value = "Insira valores na tabela";
        document.entrada.infoTempo.value = "Insira valores na tabela";
    }
}

function limpar(campo) {
    campo.value = "";
}