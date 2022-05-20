var botaoCalcula = document.querySelector("#calcular");
botaoCalcula.addEventListener("click", function(event){
    event.preventDefault();

    var operacao = document.getElementById("operacao");
    var valor = operacao.options[operacao.selectedIndex].value;

    var form = document.querySelector("#form-calcula");
    var elem1 = parseInt(form.elem1.value);
    var elem2 = parseInt(form.elem2.value);

    var resultado = 0;

    if (valor == 0) {
        
        resultado = elem1 + elem2;
        alert("Resultado da soma: "+ resultado);

    } else if (valor == 1){

        resultado = elem1 - elem2;
        alert("Resultado da subtração: "+ resultado);
        
    }else if(valor == 2){

        resultado = elem1 * elem2;
        alert("Resultado da multiplicação: "+ resultado);
        
    }else{

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

    }

});
