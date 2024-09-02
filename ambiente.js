let nome = prompt('Digite seu nome');
let idade = prompt('Digite sua idade');

var mensagemDeErro = 'Erro! Preencha todos os campos'
console.log(mensagemDeErro)

if (idade >= 18) {
    console.log('Pode tirar a Habilitação!')
} else {
    console.log('Ainda não pode tirar a Habilitação!')
}