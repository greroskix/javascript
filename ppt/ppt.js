// Jogo Pedra, Papel e Tesoura

const escolhajogador = prompt("Escolha Pedra, Papel ou Tesoura:")

// Solicita que o usuário informe qual ele quer

const escolhapc = ["pedra", "papel", "tesoura"] [Math.floor(Math.random() * 3)]

// Gera uma escolha aleatoria para o computador
// Criamos um array com as opções e usamos o random para escolher uma de forma aleatorio

alert(`Você escolheu ${escolhajogador}`)
alert(`O computador escolheu ${escolhapc}`)

// Mostrando qual foi a nossa escolha e qual foi a escolha do computador

// Compara se a nossa escolha foi igual a do computador

if(escolhajogador == escolhapc){
    alert("Empate")
}else if (escolhajogador == "pedra" && escolhapc == "tesoura"){ // Verificação de Vitória
    alert("Você venceu!")
}else if (escolhajogador == "papel" && escolhapc == "pedra"){
    alert("Você venceu!")
}else if (escolhajogador == "tesoura" && escolhapc == "papel"){
    alert("Você venceu")
}else {
    alert("Você perdeu.")
}