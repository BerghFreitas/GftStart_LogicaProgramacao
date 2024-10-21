function elo (derrota, vitoria){
    let saldoVitoria = vitoria - derrota

        if(saldoVitoria <= 10){
            console.log(`O Herói tem de saldo de ${saldoVitoria}, está no nível de Ferro`)
        } else if(saldoVitoria <= 20){
            console.log(`O Herói tem de saldo de ${saldoVitoria}, está no nível de Bronze`)
        } else if(saldoVitoria <= 50){
            console.log(`O Herói tem de saldo de ${saldoVitoria}, está no nível de Prata`)
        } else if(saldoVitoria <= 80){
            console.log(`O Herói tem de saldo de ${saldoVitoria}, está no nível de Ouro`)
        } else if(saldoVitoria <= 90){
            console.log(`O Herói tem de saldo de ${saldoVitoria}, está no nível de Diamante`)
        } else if(saldoVitoria <= 100){
            console.log(`O Herói tem de saldo de ${saldoVitoria}, está no nível de Lendário`)
        } else {
            console.log(`O Herói tem de saldo de ${saldoVitoria}, está no nível de Imortal`)
        }        
}elo(1, 51)