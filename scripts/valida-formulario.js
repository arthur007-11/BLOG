const nomeCompleto = document.getElementById("nome-completo");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const assunto = document.getElementById("assunto");

const formulario = document.getElementById("formulario-contato");

formulario.addEventListener("submit", function(evento) {
    if(
        nomeCompleto.value === ""
        || email.value === ""
        || telefone.value === ""
        || assunto.value === ""
    ) {
        evento.preventDefault();
        alert("Preencha todos os campos!");
    }
});
