var setaDireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    Bruna.style = "display:none"
    Samantha.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:75px"
}

function RolarParaEsquerda() {
    Bruna.style ="display:flex"
    Samantha.style ="display:none"
    setaDireita.style ="display:flex"
    setaEsquerda.style ="display:none"
}