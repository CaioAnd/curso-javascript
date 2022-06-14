var botaoPesquisa = document.getElementById("botao-pesquisa");

botaoPesquisa.addEventListener("click", function(){
    
    var data = document.getElementById("data");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.nasa.gov/planetary/apod?api_key=hnyiwSQKvTg5st8BQZtMgzciytoUggU9IDUei8zb&date=" +data.value);

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