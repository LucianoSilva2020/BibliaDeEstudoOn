
//carrossel
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function direcao(e) {
    var direcao = document.getElementById("contentSlide");

    if (e == 1) {
        //esquerda
        direcao.scrollLeft = direcao.scrollLeft - 200;
    } else if (e == 2) {
        //direita
        direcao.scrollLeft = direcao.scrollLeft + 200;
    }
}

//carrossel2
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function direcao2(a) {
    var direcao = document.getElementById("contentSlide2");

    if (a == 3) {
        //esquerda
        direcao.scrollLeft = direcao.scrollLeft - 200;
    } else if (a == 4) {
        //direita
        direcao.scrollLeft = direcao.scrollLeft + 200;
    }
}