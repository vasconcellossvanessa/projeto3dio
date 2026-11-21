let vitorias = 300
let derrotas = 15

function calcularSaldo(vitorias, derrotas) {
    let resultado = vitorias - derrotas;
    return resultado;
}

for (let i = 0; i < 1; i++) {
    let saldoVitorias = calcularSaldo(vitorias, derrotas);
    let nivel = "";




    if (vitorias <= 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    console.log("O Herói tem de saldo " + saldoVitorias + " e está no nível de " + nivel);
}
