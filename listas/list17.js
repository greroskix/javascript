// Ex1:

console.log("Ex1:")
class Livro{
    constructor(titulo, autor, paginas){
        this.titulo = titulo
        this.autor = autor
        this.paginas = paginas
    }

    mostrarDetalhes(){
        console.log(`Livro: ${this.titulo}`)
        console.log(`Autor: ${this.autor}`)
        console.log(`Páginas: ${this.paginas}`)
    }
}
const ex1 = new Livro("Harry Potter e a Pedra Filosofal", "J.K Rowling", 264)
ex1.mostrarDetalhes();

console.log()

// Ex2:

console.log("Ex2:")
class ContaBancaria{
    constructor(titular, saldo){
        this.titular = titular
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }
    sacar(valor){
        this.saldo -= valor
    }
    mostrarSaldo(){
        console.log(`Seu saldo: ${this.saldo}`)
    }
}

const ex2 = new ContaBancaria("André Greroski", 400)
ex2.mostrarSaldo();
ex2.depositar(100)
ex2.sacar(300)
ex2.mostrarSaldo();

console.log()

// Ex3:

console.log("Ex3:")
class Pet{
    constructor(nome, especie, idade){
        this.nome = nome
        this.especie = especie
        this.idade = idade
    }
    falar(){
        if(this.especie == "Cachorro"){
            console.log(`Au Au!`)
        }else if (this.especie == "Gato"){
            console.log(`Miau!`)
        }
    }
}
const ex3 = new Pet("Nick", "Gato", 10)
ex3.falar();

console.log()

// Ex4:

console.log("Ex4:")
class Filme{
    constructor(titulo, genero, duracao){
        this.titulo = titulo
        this.genero = genero
        this.duracao = duracao
    }
    assistir(){
        console.log(`Você está assistindo ${this.titulo}, que dura ${this.duracao} minutos`)
    }
}
const ex4 = new Filme("Batman: The Dark Knight", "Ação", "2h 32m")
ex4.assistir();

console.log()

// Ex5: 

console.log("Ex5:")
class Musica{
    constructor(titulo, artista, duracao){
        this.titulo = titulo
        this.artista = artista
        this.duracao = duracao
    }
    tocar(){
        console.log(`Tocando ${this.titulo} de ${this.artista}`)
    }
}
const ex5 = new Musica("My Eyes", "Travis Scott", "4:11")
ex5.tocar();