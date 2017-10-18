var imagens = document.querySelectorAll(".slider-item");
var anterior = document.getElementById("anterior");
var proximo = document.getElementById("proximo");

var ativa = 0;

anterior.onclick = function() {
    for (var i=0; i < imagens.length; i++) {
    imagens[i].classList.remove("active");  
    }
    imagens[ativa-1].classList.add("active");
    ativa--;
}


proximo.onclick = function() {
    for (var i = 0; i < imagens.length; i++) {
        imagens[i].classList.remove("active");   
    }
    imagens[ativa+1].classList.add("active");
    ativa++;
}