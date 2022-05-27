function criarTabela(event){
    /* if (event) {
        event.preventDefault();
    } */

    /* event ? event.preventDefault() : null; */

    event?.preventDefault();

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
        var thId = document.createElement("th");
        var thEntrada = document.createElement("th");
        var thPrincipal = document.createElement("th");
        var thBebidas = document.createElement("th");
        var thSobremesa = document.createElement("th");
        var thPagamento = document.createElement("th");
        var thTotal = document.createElement("th");

        thId.textContent = "ID";
        thEntrada.textContent = "Entrada";
        thPrincipal.textContent = "Prato principal";
        thBebidas.textContent = "Bebidas";
        thSobremesa.textContent = "Sobremesa";
        thPagamento.textContent = "Forma de pagamento";
        thTotal.textContent = "Valor total";

        var tabelaCabeca = document.querySelector("#tabela-cabeca");
        var trTabelaCabeca = document.createElement("tr");

        tabelaCabeca.appendChild(trTabelaCabeca);

        trTabelaCabeca.appendChild(thId);
        trTabelaCabeca.appendChild(thEntrada);
        trTabelaCabeca.appendChild(thPrincipal);
        trTabelaCabeca.appendChild(thBebidas);
        trTabelaCabeca.appendChild(thSobremesa);
        trTabelaCabeca.appendChild(thPagamento);
        trTabelaCabeca.appendChild(thTotal);

        x++;
    }

    var valorTotal = parseFloat(valor1 + valor2 + valor3 + valor4);

    var tdId = document.createElement("td");
    var tdEntrada = document.createElement("td");
    var tdPrincipal = document.createElement("td");
    var tdBebidas = document.createElement("td");
    var tdSobremesa = document.createElement("td");
    var tdPagamento = document.createElement("td");
    var tdTotal = document.createElement("td");

    id++;

    tdId.textContent = id;

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

    trTabelaCorpo.appendChild(tdId);
    trTabelaCorpo.appendChild(tdEntrada);
    trTabelaCorpo.appendChild(tdPrincipal);
    trTabelaCorpo.appendChild(tdBebidas);
    trTabelaCorpo.appendChild(tdSobremesa);
    trTabelaCorpo.appendChild(tdPagamento);
    trTabelaCorpo.appendChild(tdTotal);
    
}

function mostraImagem(entrada,divEntrada){

    var imagem = divEntrada.querySelector(".imagem");

    var chars = entrada.options[entrada.selectedIndex].textContent.split('-');

    if (chars[0] == "#001 ") {
        imagem.src="img/rolinho-primavera.jpg";
    }
    else if (chars[0] == "#002 ") {
        imagem.src="img/shimeji.jpg";
    }
    else if (chars[0] == "#003 ") {
        imagem.src="img/guioza.webp";
    }
    else if (chars[0] == "#004 ") {
        imagem.src="img/sushi.jpg";
    }
    else if (chars[0] == "#005 ") {
        imagem.src="img/sashimi.jpg";
    }
    else if (chars[0] == "#006 ") {
        imagem.src="img/temaki.webp";
    }
    else if (chars[0] == "#007 ") {
        imagem.src="img/amazake.jpeg";
    }
    else if (chars[0] == "#008 ") {
        imagem.src="img/shochu.jpg";
    }
    else if (chars[0] == "#009 ") {
        imagem.src="img/umeshu.jpg";
    }
    else if (chars[0] == "#010 ") {
        imagem.src="img/taiyaki.jpg";
    }
    else if (chars[0] == "#011 ") {
        imagem.src="img/daifuku.jpg";
    }
    else if (chars[0] == "#012 ") {
        imagem.src="img/warabi-mochi.jpg";
    }
    else{
        imagem.src="img/nenhum.jpg";
    }
}

function ajustarTexto(entrada){
    if (entrada == "Nenhum") {
        return entrada;
    }
    var chars = entrada.split('-');
    return chars[1];
}

function formataReais(valor){
    var conversao = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return conversao;
}