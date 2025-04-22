// LocalStorage -> script.js

// Quando carregar a página, mostrar o que já estava salvo
window.onload = function(){
    const textoSalvo = localStorage.getItem("minhaAnotacao")
    if(textoSalvo){
        document.getElementById("anotacao").value = textoSalvo
    }
}

// Salvar quando clicar no botão

function salvarAnotacao() {
    const conteudo = document.getElementById("anotacao").value
    localStorage.setItem("minhaAnotacao", conteudo)
    alert("Nota salva com sucesso")
}