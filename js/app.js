function exibeTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function getRandomNumber() {
    return parseInt(Math.random() * 10 + 1);
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute > secretNumber) {
        exibeTexto('p', 'O número secreto é menor.');
    } else if (chute < secretNumber) {
        exibeTexto('p', 'O número secreto é maior.');
    } else {
        exibeTexto('h1', 'Acertou!');
    }
}

exibeTexto('h1', 'Jogo do número secreto');
exibeTexto('p', 'Escolha um número entre 1 e 10');

let secretNumber = getRandomNumber();
