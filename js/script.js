var botao = document.getElementById("botao");
var modal = document.querySelector(".bloco");
var fundo = document.getElementById("fundo");
var fechar = document.getElementById("fechar");


botao.onclick = function() {
    modal.classList.add("visivel");
    fundo.classList.add("visivel");
    
}
fechar.onclick = function() {
    modal.classList.remove("visivel");
    fundo.classList.remove("visivel");
}

fundo.onclick = function(e) {
    console.log(e);
    if (e.target == fundo) {
        modal.classList.remove("visivel");
        fundo.classList.remove("visivel");
    }
    
}
// Login
var email = document.getElementById('email');
var senha = document.querySelector('#senha');
var formulario = document.querySelector('form');
formulario.onsubmit = function() {
    if(email.value !== 'admin@admin.com' ||
        senha.value !== 'admin') {
        alert('Email errado');
        modal.classList.add('erro');
        
        setTimeout(function() {
            modal.classList.remove('erro');
        }, 1000);
        return false;
    }

    localStorage.usuario = email.value;
    
}
console.log(email);
