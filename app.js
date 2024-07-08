const prompt = require('prompt-sync')({sigint: true})

let primeiroNumero = prompt('Primeiro número: ') 
let operacao = prompt('Qual é a operação ?')
let segundoNumero = prompt('Segundo número: ')



switch (operacao){
    case '+':
        console.log(`A resposta é: ${parseFloat(primeiroNumero)+parseFloat(segundoNumero)}`)
        break
    case '-':
        console.log(`A resposta é: ${parseFloat(primeiroNumero)-parseFloat(segundoNumero)}`)
        break
    case 'x':
        console.log(`A resposta é: ${parseFloat(primeiroNumero)*parseFloat(segundoNumero)}`)
        break
    case '/':
        console.log(`A resposta é: ${parseFloat(primeiroNumero)/parseFloat(segundoNumero)}`)
        break
    case '%':
        console.log(`A resposta é: ${(parseFloat(primeiroNumero) * parseFloat(segundoNumero)) / 100}`)
        break
    default:
        console.log('Operação invalida, tente novamente.')
}
