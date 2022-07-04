function criaTabela(table,array) {

    //Recebendo corretamente itens da array
    const objArray = Object.keys(array);

    const lista = array[objArray[0]];

    console.log(lista);

    //Cabeçalho
    //Criando elementos
    var thead = document.createElement("thead");

    var trHead = document.createElement("tr");
    var tdATHead = document.createElement("td");
    var tdHWSHead = document.createElement("td");
    var tdPREHead = document.createElement("td");
    var tdWDHead = document.createElement("td");

    //Organizando aninhamento
    table.appendChild(thead);

    thead.appendChild(trHead);

    trHead.appendChild(tdATHead);
    trHead.appendChild(tdHWSHead);
    trHead.appendChild(tdPREHead);
    trHead.appendChild(tdWDHead);

    //Inserindo conteúdo
    tdATHead.textContent = "AT";
    tdHWSHead.textContent = "HWS";
    tdPREHead.textContent = "PRE";
    tdWDHead.textContent = "WD";

    //Css da tabela
    table.classList.add("table");
    table.classList.add("table-dark");
    table.classList.add("table-hover");


    //Criando corpo
    //Criando elementos

    var tbody = document.createElement("tbody");
    table.appendChild(tbody);

    for (let i = 0; i < lista.AT.sol_hours_with_data.length; i++) { //Conta itens

        var trBody = document.createElement("tr");

        var tdATBody = document.createElement("td");
        var tdHWSBody = document.createElement("td");
        var tdPREBody = document.createElement("td");
        var tdWDBody = document.createElement("td");

        //Organizando elementos
        tbody.appendChild(trBody);

        trBody.appendChild(tdATBody);
        trBody.appendChild(tdHWSBody);
        trBody.appendChild(tdPREBody);
        trBody.appendChild(tdWDBody);

        //Inserindo conteúdo
        tdATBody.textContent = lista.AT.sol_hours_with_data[i];
        tdHWSBody.textContent = lista.HWS.sol_hours_with_data[i];
        tdPREBody.textContent = lista.PRE.sol_hours_with_data[i];
        tdWDBody.textContent = lista.WD.sol_hours_with_data[i];
    }
    




}