// Funções Matemáticas 
let num = 4.7

// Arredondar números
console.log(Math.round(num)) // Inteiro mais próximo
console.log(Math.floor(num)) // Arredonda pra baixo
console.log(Math.ceil(num)) // Arredonda pra cima

console.log(Math.random()) // Número Aleatório entre 0 e 1
console.log(Math.random()*10) // Número Aleatório entre 0 e 10

// Funções de String
let texto = " Eu amo JavaScript"

// Manipular String
console.log(texto.toUpperCase()) // Deixa tudo maisculo
console.log(texto.toLowerCase()) // Deixa tudo minusculo
console.log(texto.trim()) // Remove espaços antes e depois do texto

// localizar texto
console.log(texto.charAt(5)) // Mostra a letra que está nessa posição
console.log(texto.includes("javascript")) // Verifica se tem a plavra

// Trocar textos
console.log(texto.replace("amo", "adoro"))

// Funções Númericas
let numero = "42.85"
console.log(parseInt(numero)) // Converte string para número inteiro
console.log(parseFloat(numero)) // Converte String para número decimal
console.log(Number(numero).toFixed(1)) // Define quantas casas decimais vai mostrar
