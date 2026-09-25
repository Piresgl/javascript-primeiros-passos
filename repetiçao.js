/*let senha = 32289;
let entradaDoUsuario = prompt("Digite sua senha");
var usuarioAcertouASenha = entradaDoUsuario == senha;

while (usuarioAcertouASenha == false) {
    alert("Senha incorreta, tente dnovo")
    entradaDoUsuario = prompt("Digite sua senha");
    usuarioAcertouASenha = entradaDoUsuario == senha;
    // Codidgo a ser repetido
    //Ate a condiçao ser satisfeita
}
document.write("Acesso Liberado")*/


var nomeDoUsuario = prompt ("Digite seu nome completo")
document.write(" O nome do usuario tem " + nomeDoUsuario.length + " letras<br>")

for (let i = 0; i < 10; i = i + 1) {
    document.write("O contador vale: " + i + "<br>");
}


do {
    //Codigo a ser executado AO MENOS uma vez
    //Ate a condição de parada
} while (condicao);