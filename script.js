let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let size = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset="abcdefghijklmnopqrstuvwxyzABCDEFJHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";
let novasenha='';

size.innerHTML=sliderElement.value;

slider.oninput = function(){
    size.innerHTML=this.value;
}

function gerador(){

    let pass="";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random()*n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML=pass;
    novasenha = pass;
}

function copiar(){
    navigator.clipboard.writeText(novasenha);
    alert("Senha copiada com sucesso!")
}

