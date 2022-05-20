var botaoCalcula = document.querySelector("#calcular");
botaoCalcula.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-calcula");

    var elem1 = parseInt(form.elem1.value);
    var elem2 = parseInt(form.elem2.value);

    var validacao = true;

    if (elem2 <= 0){
        validacao = false;
    }
    
    if (validacao){
        var resultado = elem1 / elem2;
        alert("Resultado: "+resultado);
    }
    else{
        alert("Não é possível dividir por este número!");
    }

});
