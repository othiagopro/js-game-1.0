alert('Boas vindas ao jogo do Número Secreto')

let chute = prompt('Escolha um número entre 1 e 10')
let numeroSecreto = 5 

if ( chute == numeroSecreto ) {
    console.log('Acertou')
} else {
    console.log('[ERRO] Tente novamente!')
}