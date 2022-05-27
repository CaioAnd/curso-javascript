var x = 0;
var id = 0;

var botaoFinalizar = document.querySelector("#finalizar");
botaoFinalizar.addEventListener("click", criarTabela);

var selectEntrada = document.getElementById("entrada");
selectEntrada.addEventListener("change", () => mostraImagem(entrada,divEntrada));
var selectEntrada = document.getElementById("principal");
selectEntrada.addEventListener("change", () => mostraImagem(principal,divPrincipal));
var selectEntrada = document.getElementById("bebidas");
selectEntrada.addEventListener("change", () => mostraImagem(bebidas,divBebidas));
var selectEntrada = document.getElementById("sobremesa");
selectEntrada.addEventListener("change", () => mostraImagem(sobremesa,divSobremesa));