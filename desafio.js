// CRIE UM PROGRAMA QUE LEIA UM NÚMERO, ESCREVA NA TELA SOMENTE OS NÚMEROS DIVISÍVEIS POR 3
// DESDE O 0 (ZERO) ATÉ O NÚMERO DIGITADO PELO USUÁRIO
//
// EX: usuário escreve 12
//
// O Programa escreve: 3 6 9 12 15 18 21

let numero = prompt("digite um numero");
for (let i = 0; i <= numero; i++);
    
if (numero % 3 == 0) {

    document.write("Voce escolheu o numero " + numero + "e ele é divisivel por 3");
}
else {
    document.write("Esse numero" + numero + "nao é divisivel por 3 ");

}