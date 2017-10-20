var login = document.getElementById("login");
var cadastro = document.getElementById("cadastro");

var modalLogin = document.querySelector(".blocoLogin");
var fundoLogin = document.getElementById("fundoLogin");
var fecharLogin = document.getElementById("fecharLogin");

var modalCadastro = document.querySelector(".blocoCadastro");
var fundoCadastro = document.getElementById("fundoCadastro");
var fecharCadastro = document.getElementById("fecharCadastro");
// var usuario;
// var email = document.getElementById('email');
// var senha = document.querySelector('#senha');
var formulario = document.querySelector('form');

login.onclick = function() {
    modalLogin.classList.add("visivel");
    fundoLogin.classList.add("visivel");

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
}

cadastro.onclick = function() {
    modalCadastro.classList.add("visivel");
    fundoCadastro.classList.add("visivel");

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
}

fecharLogin.onclick = function() {
    modalLogin.classList.remove("visivel");  
    fundoLogin.classList.remove("visivel");  
}
fecharCadastro.onclick = function() {
    modalCadastro.classList.remove("visivel");
    fundoCadastro.classList.remove("visivel");
}
fundoLogin.onclick = function(e) {
    console.log(e);
    if (e.target == fundoLogin) {
        modalLogin.classList.remove("visivel");
        fundoLogin.classList.remove("visivel");
    }
    
}
fundoCadastro.onclick = function(e) {
    console.log(e);
    if (e.target == fundoCadastro) {
        modalCadastro.classList.remove("visivel");
        fundoCadastro.classList.remove("visivel");
    }
    
}
// Login

