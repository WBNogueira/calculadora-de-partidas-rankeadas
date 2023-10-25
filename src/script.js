let winBalance = winningBalance(120, 30)
let rank = rankeado(winBalance)

console.log(`O Herói tem de saldo de ${winBalance} está no nível ${rank}`)


function winningBalance(numberVictories, numberDefeats) {
    let result = numberVictories - numberDefeats;
    return result;
}

function rankeado(winBalance) {
    if (winBalance <= 10) {
        return "Ferro";
    } else if (winBalance <= 20) {
        return "Bronze";
    } else if (winBalance <= 50) {
        return "Prata";
    } else if (winBalance <= 80) {
        return "Ouro";
    } else if (winBalance <= 90) {
        return "Diamante";
    } else if (winBalance <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}
