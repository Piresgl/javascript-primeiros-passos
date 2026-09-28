var meutitulo = document.getElementById("titulo");
let botaosimples = document.getElementById("simples");

let fundomarromativado = false

botaosimples.onclick = trocaClasse;

function trocaClasse() {
  if (meutitulo.classList.contains("texto")) {
    meutitulo.classList.remove("texto");
    meutitulo.classList.add("titulo");
  } else {
    meutitulo.classList.remove("titulo");
    meutitulo.classList.add("texto");s
  }
}
