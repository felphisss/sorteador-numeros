mensagemPadrao();

function sortear() {
    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    let valorMin = parseInt(document.getElementById('valor-min').value);
    let valorMax = parseInt(document.getElementById('valor-max').value);

    // Validação para evitar erros no código
    if ((quantidadeDeNumeros > (valorMax-valorMin+1)) || (valorMin > valorMax)) {
        alert(
`Erro na operação.
Verifique os números inseridos:
    - Quantidade deve ser menor que a diferença entre o mínimo e o máximo;
    - Valor mínimo deve ser menor que o valor máximo.
`)
        return;
    }

    let numerosSorteados = [];
    let numero;

    for (let i = 0; i < quantidadeDeNumeros; i++) {
        numero = obterNumeroAleatorio(valorMin, valorMax);
        while (numerosSorteados.includes(numero)) {
            numero = obterNumeroAleatorio(valorMin, valorMax); 
        }
        numerosSorteados.push(numero);
    }
    exibirTextoNaTela('resultado',`<label class="texto__paragrafo">Números sorteados:  ${numerosSorteados}</label>`);

    document.getElementById('btn-reiniciar').removeAttribute('disabled');
}

function reiniciar() {
    limparCampo('quantidade');
    limparCampo('valor-min');
    limparCampo('valor-max');
    mensagemPadrao();
    document.getElementById('btn-reiniciar').setAttribute('disabled', true);
}

function obterNumeroAleatorio(min, max) {
    return numerosObtidos = Math.floor(Math.random() * (max - min + 1) + min);
}

function limparCampo(id) {
    document.getElementById(id).value = '';
}

function exibirTextoNaTela(id,texto) {
    let localDoTexto = document.getElementById(id);
    localDoTexto.innerHTML = texto;
}

function mensagemPadrao() {
    exibirTextoNaTela('resultado', `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`);
}