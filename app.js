let listaDeNumerosSorteados = [];
let limite = 10;
let numeroSecreto = gerarNumero();
let tentativas = 1;

function exibirTexto(tag, texto){
let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function logo(){
exibirTexto('h1','Jogo do número secreto');
exibirTexto('p','Escolha um número entre 1 e 10');

}
logo();

function verificarChute(){
    let chute = document.querySelector('input').value;
if (chute == numeroSecreto){
    exibirTexto('h1','Acertou!');
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
    exibirTexto('p',mensagemTentativas);
document.getElementById('reiniciar').removeAttribute('disabled');

}else {
    if(chute > numeroSecreto){
        exibirTexto('p','Você errou, o número secreto é menor!');
    } else {
        exibirTexto('p','Você errou, o número secreto é maior!');
    }
    tentativas++;
    limparCampo();
}
}

function gerarNumero(){
   let numeroEscolhido = parseInt(Math.random() * limite +1);
   let quantidade = listaDeNumerosSorteados.length;
   if (quantidade == limite){
    listaDeNumerosSorteados = [];
   }
   
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumero();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
       
        return numeroEscolhido;
    }
    
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function novoJogo(){
    numeroSecreto=gerarNumero();
    limparCampo();
    tentativas = 1;
    logo();
    document.getElementById('reiniciar').setAttribute('disabled', true );
}

