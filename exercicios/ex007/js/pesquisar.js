var key = document.getElementById("key");

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.nasa.gov/insight_weather/?api_key=hnyiwSQKvTg5st8BQZtMgzciytoUggU9IDUei8zb&feedtype=json&ver=1.0");

xhr.addEventListener("load", function(){
    var resposta = xhr.responseText;
    var array = JSON.parse(resposta); //Parseia e converte string em obj

    array = array.validity_checks

    console.log(array);


    var table = document.createElement("table");
    var article = document.getElementById("article-tabela");

    article.appendChild(table);

    criaTabela(table,array);

});

xhr.send();
