var fundoLogin = document.getElementById("fundoLogin");
var fecharLogin = document.getElementById("fecharLogin");

var fundoCadastro = document.getElementById("fundoCadastro");
var fecharCadastro = document.getElementById("fecharCadastro");
// var usuario;
// var email = document.getElementById('email');
// var senha = document.querySelector('#senha');
var formulario = document.querySelector('form');

login.onclick = function() {
    fundoLogin.classList.add("visivel");
}

fundoLogin.onclick = function(e) {
    console.log(e);
    if (e.target == fundoLogin) {
        fundoLogin.classList.remove("visivel");
    }    
}

fecharLogin.onclick = function() {
    fundoLogin.classList.remove("visivel");  
}






cadastro.onclick = function() {
    fundoCadastro.classList.add("visivel");
}

fundoCadastro.onclick = function(e) {
    console.log(e);
    if (e.target == fundoCadastro) {
        fundoCadastro.classList.remove("visivel");
    }   
}

fecharCadastro.onclick = function() {
    fundoCadastro.classList.remove("visivel");
}


// Login

