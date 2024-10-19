
/*o return sempre retornará apenas 1 valor, aqui no caso foi feito espressao  de   soma e ele retornou apenas o valor*/

function soma (num1, num2){    
    return num1 + num2                 
    

}
let resultado = soma(2, 56)
console.log(resultado)


function guardaPrimeiroNome(nome){
    let primeiroNome = nome.split(" ")[0]
    return primeiroNome
}
let apenasPrimeiroNome = guardaPrimeiroNome('aldembergue alves de freitas')
console.log(apenasPrimeiroNome)

//essa funcao guarda apenas o primeiro nome


