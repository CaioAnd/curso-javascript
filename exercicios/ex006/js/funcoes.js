function validaData() {
    //Definindo validação da data
    let hoje = new Date().toISOString().slice(0, 10);

    var input1 = document.getElementById("data-inicial");
    var input2 = document.getElementById("data-final");

    input1.setAttribute('max', hoje);
    input2.setAttribute('max', hoje);
}


function criaCabecalho(article,data,table) {

    var thead = document.createElement("thead");

    var tr1 = document.createElement("tr");
    var tdData = document.createElement("td");

    var tr2 = document.createElement("tr");
    var tdNome = document.createElement("td");
    var tdId = document.createElement("td");
    var tdTamanho = document.createElement("td");

    var tr3 = document.createElement("tr");
    var tdPes = document.createElement("td");
    var tdKm = document.createElement("td");
    var tdMilhas = document.createElement("td");

    article.appendChild(table);

    table.appendChild(thead);

    thead.appendChild(tr1);
    thead.appendChild(tr2);
    thead.appendChild(tr3);

    tr1.appendChild(tdData);

    tr2.appendChild(tdNome);
    tr2.appendChild(tdId);
    tr2.appendChild(tdTamanho);

    tr3.appendChild(tdPes);
    tr3.appendChild(tdKm);
    tr3.appendChild(tdMilhas);


    //Adicionando texto do cabeçalho
    tdData.textContent = data;
    tdNome.textContent = "Nome";
    tdId.textContent = "Id";
    tdTamanho.textContent = "Tamanho";
    tdPes.textContent = "Pés";
    tdKm.textContent = "Quilômetros";
    tdMilhas.textContent = "Milhas";

    //Ajustando tamanho da tabela
    tdData.setAttribute("colspan","5");

    tdNome.setAttribute("rowspan","2");
    tdId.setAttribute("rowspan","2");
    tdTamanho.setAttribute("colspan","3");

    //Css da tabela
    table.classList.add("table");
    table.classList.add("table-dark");
    table.classList.add("table-hover");

    tdNome.classList.add("align-middle");
    tdId.classList.add("align-middle");
}

function criaElemento(item,tr) {

    //Criando colunas
    var tdNome = document.createElement("td");
    var tdId = document.createElement("td");
    var tdPes = document.createElement("td");
    var tdKm = document.createElement("td");
    var tdMilha = document.createElement("td");

    //Ajustando aninhamento
    tr.appendChild(tdNome);
    tr.appendChild(tdId);
    tr.appendChild(tdPes);
    tr.appendChild(tdKm);
    tr.appendChild(tdMilha);

    console.log(item);
    
    //Colocando conteúdo
    tdNome.textContent = item.name;
    tdId.textContent = item.id;
    tdPes.textContent = item.estimated_diameter.feet.estimated_diameter_max;
    tdKm.textContent = item.estimated_diameter.kilometers.estimated_diameter_max;
    tdMilha.textContent = item.estimated_diameter.miles.estimated_diameter_max;
}

function criaTabela(array) {

    var article = document.getElementById("div-tabela");

    //Adiciona itens na tabela

    var dias = array.near_earth_objects;

    const objDias = Object.keys(dias);

    objDias.forEach(function(dia) { // percorre array dias

        const diaAtual = dias[dia] // captura o dia atual

        var table = document.createElement("table");
        var article = document.getElementById("article-tabela");

        criaCabecalho(article,dia,table);

        var tbody = document.createElement("tbody");
        table.appendChild(tbody);

        for (let i = 0; i < diaAtual.length; i++) { // percorre as informações do dia

            const infoDia = diaAtual[i];

            var tr = document.createElement("tr");
            tbody.appendChild(tr);

            criaElemento(infoDia,tr);
        }

    })

}