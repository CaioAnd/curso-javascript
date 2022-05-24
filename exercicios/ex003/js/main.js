var botaoFinalizar = document.querySelector("#finalizar");

botaoFinalizar.addEventListener("click", function(event){
    event.preventDefault();

    var entrada = document.getElementById("entrada");
    var opcao1 = entrada.options[entrada.selectedIndex].value;

    var principal = document.getElementById("principal");
    var opcao2 = principal.options[principal.selectedIndex].value;
    
    var bebidas = document.getElementById("bebidas");
    var opcao3 = bebidas.options[bebidas.selectedIndex].value;

    var sobremesa = document.getElementById("sobremesa");
    var opcao4 = sobremesa.options[sobremesa.selectedIndex].value;

    var pagamento = document.getElementById("pagamento");
    var opcao5 = pagamento.options[pagamento.selectedIndex].value;

    document.createElement("table");
    document.createElement("thead");
});