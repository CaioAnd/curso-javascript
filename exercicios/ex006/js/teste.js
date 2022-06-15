var form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
});

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-06-14&end_date=2022-06-15&api_key=hnyiwSQKvTg5st8BQZtMgzciytoUggU9IDUei8zb");

xhr.addEventListener("load", function(){
    var resposta = xhr.responseText;
    var array = JSON.parse(resposta); //Parseia e converte string em obj

    console.log( array);
});

xhr.send();