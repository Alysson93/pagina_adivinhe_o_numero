let h1 = document.querySelector('h1');
h1.innerHTML = 'Hora do desafio';

function exibirMensagem() {
    console.log('O botão foi clicado');
}

function exibirAlerta() {
    alert('Eu amo JS');
}

function perguntaCidade() {
    let cidade = prompt('Informe uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você.`);
}

function soma() {
    let x = prompt('Informe um número X');
    let y = prompt('Informe um número Y');
    alert(`Resultado: ${parseInt(x) + parseInt(y)}`);
}