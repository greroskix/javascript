// Exercício 1:

console.log("Ex1:")
function JavaScript(){
    console.log("Eu gosto de Javascript")
}
JavaScript()
console.log("")

// Exercício 2:

console.log("Ex2:")
function contarAteCinco(){
    for(let ex2 = 1; ex2 <= 5; ex2++)
        console.log(ex2)
}
contarAteCinco()
console.log("")

// Exercício 3:

console.log("Ex3:")
function saudacao (){
    let nome = prompt("Digite seu nome:")
    console.log("Olá,",nome, "Seja bem-vindo(a)!")
}
saudacao()
console.log("")

// Exercício 4:

console.log("Ex4:")
function multiplicarDoisNumero(a,b){
    let result = a * b
    return result
}
console.log(multiplicarDoisNumero(5,3))
console.log("")

// Exercício 5:

console.log("Ex5:")
function verificarIdade(){
    let idade = prompt("Digite sua Idade:")
    if(idade >= 18){
        console.log("Maior de idade")
    }else{
        console.log("Menor de Idade")
    }
}
verificarIdade()
console.log("")

// Exercício 6:

console.log("Ex6:")
function somar(a, b){
    let ex6 = a + b
    return ex6
}
console.log(somar(7, 77))
console.log("")

// Exercício 7:

console.log("Ex7:")
function calcularAreaRetangulo(largura, altura){
    console.log("Área do Retângulo:")
    let ex7 = largura * altura
    return ex7
}
console.log(calcularAreaRetangulo(7, 8))
console.log("")

// Exercício 8:

console.log("Ex8:")
function compararIdade(){
    let idade1 = prompt("Digite a idade da primeira pessoa:")
    let idade2 = prompt("Digite a idade da segunda pessoa:")
    if(idade1 > idade2){
        console.log("A primeira pessoa com", idade1, "e mais velha")
    }else if(idade2 > idade1){
        console.log("A segunda pessoa com", idade2, "e mais velha.")
    }else if(idade1 == idade2){
        console.log("As duas pessoas tem", idade1, "anos.")
    }
}
compararIdade()