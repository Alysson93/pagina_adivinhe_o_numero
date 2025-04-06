let listaNumerosSorteados = [];
let tentativas = 1;

function exibeTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function getRandomNumber() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    if (listaNumerosSorteados.includes(numeroEscolhido) && listaNumerosSorteados.length < 10) {
        return getRandomNumber();
    }
    listaNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
}

function limparCampo(tag) {
    chute = document.querySelector(tag).value = '';
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute > secretNumber) {
        exibeTexto('p', 'O número secreto é menor.');
        limparCampo('input');
    } else if (chute < secretNumber) {
        exibeTexto('p', 'O número secreto é maior.');
        limparCampo('input');
    } else {
        exibeTexto('h1', 'Acertou!');
        let plural = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibeTexto('p', `Você descobriu o número secreto com ${tentativas} ${plural}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chutar').setAttribute('disabled', true);
    }
    tentativas++;
}

function reiniciarJogo() {
    secretNumber = getRandomNumber();
    limparCampo('input');
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('chutar').removeAttribute('disabled');
}

function mensagemInicial() {
    exibeTexto('h1', 'Jogo do número secreto');
    exibeTexto('p', 'Escolha um número entre 1 e 10');
}

let secretNumber = getRandomNumber();

mensagemInicial();