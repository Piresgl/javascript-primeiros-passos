// DECLARAÇÃO DE VARIAVEIS
let idade = prompt("Qual a sua idade?")
var idadeCalculada;
var maiorDeIdade = idade >= 18
let anoNascimento;
var anoAtual = 2026;

//PROCESSAMENTO
if (maiorDeIdade == true) {
    anoNascimento = prompt("Então digite o ano que você nasceu");
    idadeCalculada = anoAtual - anoNascimento;
   
    document.write("Você nasceu em " + anoNascimento + " e tem aproximadamente " + idadeCalculada + " anos.");
    
    //SAIDA DE DADOS
} else {
    document.write("Volte quando tiver 18 anos completos!")
}
    