let saudacao = function(nome){
    console.log("Oi"), nome
}
saudacao("Juliana")


// Arrow function (função da seta)
let cumprimentar = (nome) => {
    console.log("Oi", nome)
}
cumprimentar("Luiz")
cumprimentar("José")

//Função Anonima
let soma = function(a,b){
    let resultado = a + b
    return resultado
}
console.log(soma(5,3))

// Arrow Function
let adicao = (a,b) => {
    let resultado = a + b
    return resultado
}
console.log(adicao(6,4))

// Função Anonima
let dobro = function(numero){
    let resultado = numero * 2
    return resultado
}
console.log(dobro(5))

// Arrow Function
let vezesDois = (numero) => {
    let resultado = numero * 2
    return resultado
}
console.log(vezesDois(8))