/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    - passo 1 - dar um jeito de pegar o elemento HTML dos botoes
    - passo 2 - dar um jeito de identificar o clique do usuario no botao
    - passo 3 - desmarcar o botao selecionado anterior
    - passo 4 - marcar o botao clicando como se estivesse selecionado
    - passo 5 - esconder a imagem anteriormente selecionada
    - passo 6 - fazer aparecer a imagem correspondente ao botao clicado
    - passo 7 - esconder as informacoes do dragao anteriormente selecionado
    - passo 8 - mostrar a informacao do dragaoreferente ao botao clicado
    */

// - passo 1 - dar um jeito de pegar o elemento HTML dos botoes
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes")

// - passo 2 - dar um jeito de identificar o clique do usuario no botao
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        // - passo 3 - desmarcar o botao selecionado anterior
        desativarBotaoSelecionado();

        // - passo 4 - marcar o botao clicando como se estivesse selecionado
        botao.classList.add("selecionado");

        // - passo 5 - esconder a imagem anteriormente selecionada
        esconderImagemAtiva();

        // - passo 6 - fazer aparecer a imagem correspondente ao botao clicado
        mostrarImagemDeFundo(indice);

        // - passo 7 - esconder as informacoes do dragao anteriormente selecionado
        escoderInformacoesAtivas();

        // - passo 8 - mostrar a informacao do dragaoreferente ao botao clicado
        mostrarInformacoes(indice);

    });
});

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function escoderInformacoesAtivas() {
    const informacaoAtiva = document.querySelector(".informacoes.ativa");
    informacaoAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
