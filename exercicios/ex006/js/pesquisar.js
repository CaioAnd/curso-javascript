validaData();

var form = document.querySelector("form");

form.addEventListener("submit", function(event){
    
    //Para função de recarregar página
    event.preventDefault();

    //Lendo a data
    var dataInicial = document.getElementById("data-inicial");
    var dataFinal = document.getElementById("data-final");
    var key = document.getElementById("key");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.nasa.gov/neo/rest/v1/feed?start_date=" + dataInicial.value + "&end_date=" + dataFinal.value + "&api_key=" + key.value);

    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText;
        var array = JSON.parse(resposta); //Parseia e converte string em obj

        console.log( array);

        //Inserindo imagem
        var imagem = document.getElementById("imagem");
        imagem.src = array.hdurl;

        //Inserindo titulo
        var titulo = document.getElementById("titulo");
        titulo.textContent = array.title;

        //Inserindo decrição
        var descricao = document.getElementById("descricao");
        descricao.textContent = array.explanation;

        //Inserindo Copyright
        var copyright = document.getElementById("copyright");
        copyright.textContent = array.copyright;

        console.log(titulo);
    });

    xhr.send();
});