// Javascript -> SetInterval -> Main.js
let contato = 0

setInterval(function(){
    contador++
    console.log("Contador:" +contador)
}, 1000)

function pararContador() {
    clearInterval(intervalo)
}

iniciarContador()