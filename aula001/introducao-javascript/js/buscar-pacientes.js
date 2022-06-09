var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("buscando pacientes...");

    //Criando xhr para buscar dados da API
    var xhr = new XMLHttpRequest();


    //Configurando objeto XMLHttpRequest
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //Criando requisição


    //Recebendo dados da API
    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) { //Status 200 significa carregado com sucesso
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta); //Parseia e converte string em obj

            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });

            erroAjax.classList.add("invisivel");

        } else{ //Caso link não funcione

            console.log( xhr.status);
            console.log( xhr.responseText);
            
            erroAjax.classList.remove("invisivel");

        }

        
    });

    xhr.send();
});