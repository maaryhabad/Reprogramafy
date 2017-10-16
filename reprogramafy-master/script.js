var botao = document.getElementById("botao");
// var modal = document.querySelector(".bloco");
var fundo = document.getElementById("fundo");

botao.onclick = function() {
    fundo.classList.add("visivel"); /*a modal não precisa ser mostrada porque está dentro do fundo usando display block
*/}
fecha.onclick = function() {
    fundo.classList.remove("visivel");
}

fundo.onclick = function(e) { /*e é um parâmetro*/  
    if (e.target == fundo) {
        fundo.classList.remove("visivel");
    }
}