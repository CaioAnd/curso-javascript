var x = 0;
var botaoFinalizar = document.querySelector("#finalizar");

botaoFinalizar.addEventListener("click", function(event){
    event.preventDefault();

    var entrada = document.getElementById("entrada");
    var opcao1 = entrada.options[entrada.selectedIndex].textContent;

    var principal = document.getElementById("principal");
    var opcao2 = principal.options[principal.selectedIndex].textContent;
    console.log(opcao2);
    
    var bebidas = document.getElementById("bebidas");
    var opcao3 = bebidas.options[bebidas.selectedIndex].textContent;

    var sobremesa = document.getElementById("sobremesa");
    var opcao4 = sobremesa.options[sobremesa.selectedIndex].textContent;

    var pagamento = document.getElementById("pagamento");
    var opcao5 = pagamento.options[pagamento.selectedIndex].textContent;

    if (x < 1) {
        var thEntrada = document.createElement("th");
        var thPrincipal = document.createElement("th");
        var thBebidas = document.createElement("th");
        var thSobremesa = document.createElement("th");
        var thPagamento = document.createElement("th");

        thEntrada.textContent = "Entrada";
        thPrincipal.textContent = "Prato principal";
        thBebidas.textContent = "Bebidas";
        thSobremesa.textContent = "Sobremesa";
        thPagamento.textContent = "Forma de pagamento";

        var tabelaCabeca = document.querySelector("#tabela-cabeca");
        var trTabelaCabeca = document.createElement("tr");

        tabelaCabeca.appendChild(trTabelaCabeca);

        trTabelaCabeca.appendChild(thEntrada);
        trTabelaCabeca.appendChild(thPrincipal);
        trTabelaCabeca.appendChild(thBebidas);
        trTabelaCabeca.appendChild(thSobremesa);
        trTabelaCabeca.appendChild(thPagamento);

        x++;
    }

    var tdEntrada = document.createElement("td");
    var tdPrincipal = document.createElement("td");
    var tdBebidas = document.createElement("td");
    var tdSobremesa = document.createElement("td");
    var tdPagamento = document.createElement("td");

    tdEntrada.textContent = opcao1;
    tdPrincipal.textContent = opcao2;
    tdBebidas.textContent = opcao3;
    tdSobremesa.textContent = opcao4;
    tdPagamento.textContent = opcao5;

    var tabelaCorpo = document.querySelector("#tabela-corpo");
    var trTabelaCorpo = document.createElement("tr");

    tabelaCorpo.appendChild(trTabelaCorpo);

    trTabelaCorpo.appendChild(tdEntrada);
    trTabelaCorpo.appendChild(tdPrincipal);
    trTabelaCorpo.appendChild(tdBebidas);
    trTabelaCorpo.appendChild(tdSobremesa);
    trTabelaCorpo.appendChild(tdPagamento);
    
});