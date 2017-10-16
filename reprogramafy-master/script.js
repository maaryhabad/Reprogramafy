var botao = document.getElementById("botao");
var modal = document.querySelector(".bloco");
var fundo = document.getElementById("fundo");

botao.onclick = function() {
    modal.classList.add("visivel");
    fundo.classList.add("visivel");
}
fecha.onclick = function() {
    modal.classList.remove("visivel");
    fundo.classList.remove("visivel");
}

fundo.onclick = function() {
    modal.classList.remove("visivel");
    fundo.classList.remove("visivel");
}