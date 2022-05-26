function criarTabela(){
    event.preventDefault();

    var entrada = document.getElementById("entrada");
    var opcao1 = entrada.options[entrada.selectedIndex].textContent;
    var valor1 = parseFloat(entrada.options[entrada.selectedIndex].value);

    var principal = document.getElementById("principal");
    var opcao2 = principal.options[principal.selectedIndex].textContent;
    var valor2 = parseFloat(principal.options[principal.selectedIndex].value);
    
    var bebidas = document.getElementById("bebidas");
    var opcao3 = bebidas.options[bebidas.selectedIndex].textContent;
    var valor3 = parseFloat(bebidas.options[bebidas.selectedIndex].value);

    var sobremesa = document.getElementById("sobremesa");
    var opcao4 = sobremesa.options[sobremesa.selectedIndex].textContent;
    var valor4 = parseFloat(sobremesa.options[sobremesa.selectedIndex].value);

    var pagamento = document.getElementById("pagamento");
    var opcao5 = pagamento.options[pagamento.selectedIndex].textContent;

    if (x < 1) {
        var thEntrada = document.createElement("th");
        var thPrincipal = document.createElement("th");
        var thBebidas = document.createElement("th");
        var thSobremesa = document.createElement("th");
        var thPagamento = document.createElement("th");
        var thTotal = document.createElement("th");

        thEntrada.textContent = "Entrada";
        thPrincipal.textContent = "Prato principal";
        thBebidas.textContent = "Bebidas";
        thSobremesa.textContent = "Sobremesa";
        thPagamento.textContent = "Forma de pagamento";
        thTotal.textContent = "Valor total";

        var tabelaCabeca = document.querySelector("#tabela-cabeca");
        var trTabelaCabeca = document.createElement("tr");

        tabelaCabeca.appendChild(trTabelaCabeca);

        trTabelaCabeca.appendChild(thEntrada);
        trTabelaCabeca.appendChild(thPrincipal);
        trTabelaCabeca.appendChild(thBebidas);
        trTabelaCabeca.appendChild(thSobremesa);
        trTabelaCabeca.appendChild(thPagamento);
        trTabelaCabeca.appendChild(thTotal);

        x++;
    }

    var valorTotal = parseFloat(valor1 + valor2 + valor3 + valor4);

    var tdEntrada = document.createElement("td");
    var tdPrincipal = document.createElement("td");
    var tdBebidas = document.createElement("td");
    var tdSobremesa = document.createElement("td");
    var tdPagamento = document.createElement("td");
    var tdTotal = document.createElement("td");

    opcao1 = ajustarTexto(opcao1);
    tdEntrada.textContent = opcao1;

    tdPrincipal.textContent = ajustarTexto(opcao2);
    tdBebidas.textContent = ajustarTexto(opcao3);
    tdSobremesa.textContent = ajustarTexto(opcao4);
    tdPagamento.textContent = opcao5;
    tdTotal.textContent = formataReais(valorTotal);

    var tabelaCorpo = document.querySelector("#tabela-corpo");
    var trTabelaCorpo = document.createElement("tr");

    tabelaCorpo.appendChild(trTabelaCorpo);

    trTabelaCorpo.appendChild(tdEntrada);
    trTabelaCorpo.appendChild(tdPrincipal);
    trTabelaCorpo.appendChild(tdBebidas);
    trTabelaCorpo.appendChild(tdSobremesa);
    trTabelaCorpo.appendChild(tdPagamento);
    trTabelaCorpo.appendChild(tdTotal);
    
}

function ajustarTexto(entrada){
    var chars = entrada.split('-');
    return chars[0];
}

function formataReais(valor){
    var conversao = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return conversao;
}