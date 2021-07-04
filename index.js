var valorDoContador = 0;

var contador = document.getElementById('display-contador');
contador.innerHTML = valorDoContador;

var botaoAdicionar = document.getElementById('button-adicionar');
var botaoRemover = document.getElementById('button-remover');
var botaoReset = document.getElementById('btn-reset');

function adicionar() {
    valorDoContador = valorDoContador + 1;
    contador.innerHTML = valorDoContador;
}
function remover() {
    valorDoContador = valorDoContador - 1;
    contador.innerHTML = valorDoContador;
}
function resetar() {
    valorDoContador = 0;
    contador.innerHTML = valorDoContador;
}

botaoAdicionar.addEventListener('click', adicionar)
botaoRemover.addEventListener('click', remover)
botaoReset.addEventListener('click', resetar)

