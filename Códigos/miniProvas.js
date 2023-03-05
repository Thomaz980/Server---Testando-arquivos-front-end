// Calcular o IMC

var peso = 100
var altura = 1.5
var resultado = peso / (altura * altura)

if  (resultado < 20.7){
    console.log("Abaixo do Peso")
} else if (resultado < 26.4){
        console.log("Peso Ideal")
    } else { 
        console.log("Acima do Peso")
    }
    