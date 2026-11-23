

function calcularSaldo(vitorias, derrotas) {
    let resultado = vitorias - derrotas;
    return resultado;
}

for (let i = 0; i < 1; i++) {
    let saldoVitorias = calcularSaldo(vitorias, derrotas);
    let nivel = "";

    if (saldoVitorias <= 10) {
        nivel = "Ferro";
    } else if (saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias<= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }


    console.log("O Herói tem de saldo " + saldoVitorias + newLocal + nivel);
}
