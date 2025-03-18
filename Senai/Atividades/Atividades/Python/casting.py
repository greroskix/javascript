idade = int(input("Digite sua Idade: "))
if idade>=18:
    print("Você é maior de idade.")
else:
    print("Você é menor de idade.")

nome = str(input("Digite seu nome: "))
frase = f"Olá, meu nome é {nome} e tenho {idade} anos."
print(frase)