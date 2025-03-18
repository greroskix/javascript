let bio = function(nome, idade, prof){
    return `Olá, meu nome é ${nome}, eu tenho ${idade} anos, e sou ${prof}`
}
console.log(bio("André", 16, "Estudante de desenvolvimento de sistemas."));

//--

let msg = function(nome="Desconhecido", idade=0, prof="Indefinida"){
    return `Olá, meu nome é ${nome}, eu tenho ${idade} anos, e sou ${prof}`
}
console.log(msg());

//--

let bio2 = (nome) => {
    return `Olá, ${nome}`
}
console.log(bio2("André"))

//--

let msg2 = (nome) => `Olá, ${nome}`
console.log(msg2("André"))