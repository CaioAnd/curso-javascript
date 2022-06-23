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

    xhr.open("GET", "https://api.nasa.gov/neo/rest/v1/feed?start_date=" + dataInicial.value + "&end_date=" + dataFinal.value + "&api_key=hnyiwSQKvTg5st8BQZtMgzciytoUggU9IDUei8zb");

    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText;
        var array = JSON.parse(resposta); //Parseia e converte string em obj

        criaTabela(array);

    });

    xhr.send();
});