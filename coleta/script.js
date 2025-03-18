function monstrarNome(){
    let nome = document.getElementById("nome").value
    let mensagem = document.getElementById("mensagem")
    mensagem.innerText = "Oi, " + nome
}
// Monstrando o input de um tipo texto

function mostrarIdade(){
    let idade = parseInt(document.getElementById("idade").value)
    let resultado = document.getElementById("resultado")
    resultado.innerText = "Você tem " + idade + " anos."
}
// Monstrando o input de um tipo número

function mostrarComentario(){
    let comentario = document.getElementById("comentario").value
    let comentarioExibido = document.getElementById("comentarioExibido")
    comentarioExibido.innerText = "Comentário: " + comentario
}
// Mostrar o texto do textarea

function atualizarTexto(){
    let texto = document.getElementById("campoTexto").value
    let digitado = document.getElementById("textoDigitado")
    digitado.innerText = "Você digitou: " + texto
}
// Mostrando o texto do input em tempo real