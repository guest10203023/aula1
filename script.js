function mostrarMensagem(){

alert(
"A tecnologia e a sustentabilidade são fundamentais para o futuro do agro!"
);

}

/* Banco de dados LocalStorage */

const form = document.getElementById("formIdeia");
const lista = document.getElementById("listaIdeias");

let ideias =
JSON.parse(localStorage.getItem("ideias")) || [];

mostrarIdeias();

form.addEventListener("submit", function(e){

e.preventDefault();

const texto =
document.getElementById("nomeIdeia").value;

ideias.push(texto);

localStorage.setItem(
"ideias",
JSON.stringify(ideias)
);

mostrarIdeias();

form.reset();

});

function mostrarIdeias(){

lista.innerHTML = "";

ideias.forEach((item)=>{

const li = document.createElement("li");

li.textContent = item;

lista.appendChild(li);

});

}

/* Cadastro */

function cadastro(){

const nome =
document.getElementById("novoNome").value;

const email =
document.getElementById("novoEmail").value;

const senha =
document.getElementById("novaSenha").value;

const usuario = {
nome,
email,
senha
};

localStorage.setItem(
"usuario",
JSON.stringify(usuario)
);

alert("Cadastro realizado com sucesso!");

}

/* Login */

function login(){

const email =
document.getElementById("email").value;

const senha =
document.getElementById("senha").value;

const usuario =
JSON.parse(localStorage.getItem("usuario"));

if(
usuario &&
usuario.email === email &&
usuario.senha === senha
){
alert(
"Login realizado com sucesso!"
);
}
else{
alert(
"Email ou senha incorretos!"
);
}

}