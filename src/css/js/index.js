
// esse é um comentario por linha
/* esse é um comentario multi linha

OBJETIVO- quand clicarmoms no botão temos que mostrar aimagem de fundo correspondente

1 - dar um jeito depegar o elemento HTML dosbotões
2 - dar um jeito de identificar o clique do usuário no botão
3 - desmarcar o botão selecionado anterior
4 - marcar o votão clicado como se estivesse selecionado
5 - esconder a imagem  de fundo aterior
6 - fazer aparecer a imagem de fudo correspondente ao botão clicado
 */


//1 - dar um jeito depegar o elemento HTML dosbotões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        //3 - desmarcar o botão selecionado anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        // 4 - marcar o votão clicado como se estivesse selecionado
        botao.classList.add('selecionado');

        //5 - esconder a imagem ativa de fundo aterior
        const imagemAtiva = document.querySelector('.ativa');
        
        imagemAtiva.classList.remove('ativa');

        // 6 - fazer aparecer a imagem de fudo correspondente ao botão clicado
        
        imagens[indice].classList.add('ativa');

    })
})