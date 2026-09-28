
// CRIE UM PROGRAMA QUE LEIA UM NÚMERO, ESCREVA
// NA TELA SOMENTE OS NÚMEROS DIVISÍVEIS POR 3
// DESDE O 0 (ZERO) ATÉ O NÚMERO DIGITADO PELO USUÁRIO
//
// EX: 
// O programa pergunta: "Digite um número"
// O usuário responde "30"
//
// O Programa escreve: 3 6 9 12 15 18 21 24 27 30
var entrada = prompt("Digite um número positivo:");
let numeroDigitado = parseInt(entrada);

for(let contador = 1; contador <= numeroDigitado; contador = contador + 1) {
    if (contador % 3 == 0) {
        document.write(`${contador}
`);
    }
}