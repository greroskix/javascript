//1
let nome = prompt ("Qual seu nome? ")
console.log("Bem vindo", nome, "!")

// 2
const input = document.getElementById("input")
const botao = document.getElementById("botao")
const mensagem = document.getElementById("mensagem")

botao.addEventListener("click", () => {
    mensagem.innerText = input.value;
})

// 3
let valor1 = prompt ("digite o primeiro valor: ")
let valor2 = prompt ("digite o segundo valor: ")
let soma = Number(valor1) + Number(valor2)

console.log("A soma é: ", soma)

// 4
let numero = prompt("Digite um número:");
console.log("O número informado foi: " + numero);


//5
let idade = prompt("Qual sua idade?");
if (Number(idade) >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

//6
let frase = prompt("Digite uma frase:");

console.log("Quantidade de caracteres:", frase.length);
console.log("Maiúsculas:", frase.toUpperCase());
console.log("Minúsculas:", frase.toLowerCase());
console.log("Substituindo 'bruna' por 'lais':", frase.replace("bruna", "lais"));
console.log("Contém 'JavaScript'?", frase.includes("JavaScript"));
console.log("Caractere na posição 5:", frase.charAt(4));

//7
let aleatorio = Math.floor(Math.random() * 10) + 1;
let tentativa = prompt("Adivinhe o número entre 1 e 10:");
if (Number(tentativa) === aleatorio) {
    console.log("vc acertou.");
} else {
    console.log("errou, o número era " + aleatorio);
}

//8 
let decimal = prompt("Digite um número decimal:");
console.log("Arredondado para cima:", Math.ceil(Number(decimal)));
console.log("Arredondado para baixo:", Math.floor(Number(decimal)));
console.log("Arredondado normalmente:", Math.round(Number(decimal)));

//9 
let numeros = [5, 12, 8, 20, 3, 7, 15, 2, 30, 10];
console.log("Maior número:", Math.max(...numeros));
console.log("Menor número:", Math.min(...numeros));

//10
let valor = prompt("Informe um número:");
console.log("Valor absoluto:", Math.abs(Number(valor)));
console.log("Elevado a 4:", Math.pow(Number(valor), 4));
console.log("Raiz quadrada:", Math.sqrt(Number(valor)));

// 11
let hoje = new Date();
console.log("Data atual:", hoje.toLocaleDateString());

// 12
let aniversario = new Date("2025-12-20");
let agora = new Date();
let diff = aniversario - agora;
let dias = Math.ceil(diff / (1000 * 60 * 60 * 24));
console.log("Faltam", dias, "dias para o seu aniversário.");