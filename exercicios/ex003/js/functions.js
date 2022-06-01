function criarTabela(event){
    /* if (event) {
        event.preventDefault();
    } */

    /* event ? event.preventDefault() : null; */

    event?.preventDefault();

    var nome = leNome();

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
        var thNome = document.createElement("th");
        var thEntrada = document.createElement("th");
        var thPrincipal = document.createElement("th");
        var thBebidas = document.createElement("th");
        var thSobremesa = document.createElement("th");
        var thPagamento = document.createElement("th");
        var thTotal = document.createElement("th");

        thId.textContent = "ID";
        thNome.textContent = "Nome";
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
        trTabelaCabeca.appendChild(thNome);
        trTabelaCabeca.appendChild(thEntrada);
        trTabelaCabeca.appendChild(thPrincipal);
        trTabelaCabeca.appendChild(thBebidas);
        trTabelaCabeca.appendChild(thSobremesa);
        trTabelaCabeca.appendChild(thPagamento);
        trTabelaCabeca.appendChild(thTotal);

        x++;
    }

    quantidade1 = document.getElementById("entradaQuantidade");
    quantidade2 = document.getElementById("principalQuantidade");
    quantidade3 = document.getElementById("bebidasQuantidade");
    quantidade4 = document.getElementById("sobremesaQuantidade");

    quantidade1 = quantidade1.value;
    quantidade2 = quantidade2.value;
    quantidade3 = quantidade3.value;
    quantidade4 = quantidade4.value;

    valor1 = valor1 * quantidade1;
    valor2 = valor2 * quantidade2;
    valor3 = valor3 * quantidade3;
    valor4 = valor4 * quantidade4;
    

    var valorTotal = parseFloat(valor1 + valor2 + valor3 + valor4);

    var tdId = document.createElement("td");
    var tdNome = document.createElement("td");
    var tdEntrada = document.createElement("td");
    var tdPrincipal = document.createElement("td");
    var tdBebidas = document.createElement("td");
    var tdSobremesa = document.createElement("td");
    var tdPagamento = document.createElement("td");
    var tdTotal = document.createElement("td");

    id++;

    tdId.textContent = id;

    tdEntrada.textContent = validaQuantidade(opcao1,quantidade1);
    tdPrincipal.textContent = validaQuantidade(opcao2,quantidade2);
    tdBebidas.textContent = validaQuantidade(opcao3,quantidade3);
    tdSobremesa.textContent = validaQuantidade(opcao4,quantidade4);
    tdPagamento.textContent = opcao5;
    tdTotal.textContent = formataReais(valorTotal);

    tdNome.textContent = nome;

    var tabelaCorpo = document.querySelector("#tabela-corpo");
    var trTabelaCorpo = document.createElement("tr");

    tabelaCorpo.appendChild(trTabelaCorpo);

    trTabelaCorpo.appendChild(tdId);
    trTabelaCorpo.appendChild(tdNome);
    trTabelaCorpo.appendChild(tdEntrada);
    trTabelaCorpo.appendChild(tdPrincipal);
    trTabelaCorpo.appendChild(tdBebidas);
    trTabelaCorpo.appendChild(tdSobremesa);
    trTabelaCorpo.appendChild(tdPagamento);
    trTabelaCorpo.appendChild(tdTotal);


    //Limpando opções

    //Nome
    document.getElementById("inserir-nome").value = ""; 

    //Entrada
    document.getElementById("entrada").selectedIndex = 0;
    document.getElementById("entradaQuantidade").value = "";
    document.getElementById("entradaQuantidade").removeAttribute("enabled", "");
    document.getElementById("entradaQuantidade").setAttribute("disabled", "");

    //Principal
    document.getElementById("principal").selectedIndex = 0;
    document.getElementById("principalQuantidade").value = "";
    document.getElementById("principalQuantidade").removeAttribute("enabled", "");
    document.getElementById("principalQuantidade").setAttribute("disabled", "");

    //Bebidas
    document.getElementById("bebidas").selectedIndex = 0;
    document.getElementById("bebidasQuantidade").value = "";
    document.getElementById("bebidasQuantidade").removeAttribute("enabled", "");
    document.getElementById("bebidasQuantidade").setAttribute("disabled", "");

    //Sobremesa
    document.getElementById("sobremesa").selectedIndex = 0;
    document.getElementById("sobremesaQuantidade").value = "";
    document.getElementById("sobremesaQuantidade").removeAttribute("enabled", "");
    document.getElementById("sobremesaQuantidade").setAttribute("disabled", "");

    //Forma de pagamento
    document.getElementById("pagamento").selectedIndex = 0;
}   

function mostraImagem(entrada,divEntrada,quantidade){

    var imagem = divEntrada.querySelector(".imagem");

    var chars = entrada.options[entrada.selectedIndex].textContent.split('-');

    if (chars[0] == "#001 ") {
        imagem.src="img/rolinho-primavera.jpg";
        quantidade.removeAttribute("disabled", "");
        quantidade.setAttribute("enabled", "");
    }
    else if (chars[0] == "#002 ") {
        imagem.src="img/shimeji.jpg";
        quantidade.removeAttribute("disabled", "");
        quantidade.setAttribute("enabled", "");
    }
    else if (chars[0] == "#003 ") {
        imagem.src="img/guioza.webp";
        quantidade.removeAttribute("disabled", "");
        quantidade.setAttribute("enabled", "");
    }
    else if (chars[0] == "#004 ") {
        imagem.src="img/sushi.jpg";
        quantidade.removeAttribute("disabled", "");
        quantidade.setAttribute("enabled", "");
    }
    else if (chars[0] == "#005 ") {
        imagem.src="img/sashimi.jpg";
        quantidade.removeAttribute("disabled", "");
        quantidade.setAttribute("enabled", "");
    }
    else if (chars[0] == "#006 ") {
        imagem.src="img/temaki.webp";
        quantidade.removeAttribute("disabled", "");
        quantidade.setAttribute("enabled", "");
    }
    else if (chars[0] == "#007 ") {
        imagem.src="img/amazake.jpeg";
        quantidade.removeAttribute("disabled", "");
        quantidade.setAttribute("enabled", "");
    }
    else if (chars[0] == "#008 ") {
        imagem.src="img/shochu.jpg";
        quantidade.removeAttribute("disabled", "");
        quantidade.setAttribute("enabled", "");
    }
    else if (chars[0] == "#009 ") {
        imagem.src="img/umeshu.jpg";
        quantidade.removeAttribute("disabled", "");
        quantidade.setAttribute("enabled", "");
    }
    else if (chars[0] == "#010 ") {
        imagem.src="img/taiyaki.jpg";
        quantidade.removeAttribute("disabled", "");
        quantidade.setAttribute("enabled", "");
    }
    else if (chars[0] == "#011 ") {
        imagem.src="img/daifuku.jpg";
        quantidade.removeAttribute("disabled", "");
        quantidade.setAttribute("enabled", "");
    }
    else if (chars[0] == "#012 ") {
        imagem.src="img/warabi-mochi.jpg";
        quantidade.removeAttribute("disabled", "");
        quantidade.setAttribute("enabled", "");
    }
    else{
        imagem.src="img/nenhum.jpg";
        quantidade.removeAttribute("enabled", "");
        quantidade.setAttribute("disabled", "");
    }
}

function validaQuantidade(opcao,quantidade){
    
    if (quantidade == 0) {
        return("Nenhum");
    }
    else {
        return(ajustarTexto(opcao) + " x" + quantidade);
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

function leNome() {
    var nome = document.getElementById("inserir-nome");

    return(nome.value);
}

function leQuantidade() {
    var quantidade = 0;
}