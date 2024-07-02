let num1 = prompt('Digite o primeiro número:  ')
let num2 = prompt('Digite o segundo número: ')


let soma = Number(num1)+ Number(num2)
let sub = num1 - num2
let mult = num1 * num2
let div = num1 / num2
let resto = num1 % num2


let numPar
if (soma % 2 === 0) {
  numPar = "Sim"
  
}else {
  numPar = "Não, é ímpar"
}

let iguais
if(num1 === num2){
  iguais = "Sim"

}else {
  iguais = "Não"
}

alert(`A soma dos números digitados é: ${soma}`)
alert(`A subtração dos números digitados é: ${sub}`)
alert(`A multiplicação dos números digitados é: ${mult} `)
alert(`A divisão dos números digitados é: ${div}`)
alert(`O resto da divisão dos números é: ${resto}`)
alert(`A soma da divisão é par? ${numPar} `)
alert(`Os números inseridos são diferentes? ${iguais}`)









