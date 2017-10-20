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

var formCadastro = fundoCadastro.querySelector('form');

formCadastro.onsubmit = function (e) {
    var emailCadastro = document.querySelector("#emailCadastro");
    var senhaCadastro = document.querySelector("#senhaCadastro");

    var modalCadastro = document.querySelector(".blocoCadastro");

    localStorage.email = emailCadastro.value;
    localStorage.senha = senhaCadastro.value;
}

var formLogin = fundoLogin.querySelector('form');
formLogin.onsubmit = function (){
    var emailLogin = document.querySelector("#emailLogin");
    var senhaLogin = document.querySelector("#senhaLogin");

    var modalLogin = document.querySelector(".blocoLogin");

    

    if (localStorage.email == emailLogin.value && localStorage.senha == senhaLogin.value) {
        //troca de página
        botaoLogin.innerHTML = "Olá " +emailLogin.value;
    } else {
        alert("Seus dados estão incorretos, tente novamente");
        return false;
    }
    
}


// Login

