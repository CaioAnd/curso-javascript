var valores = document.querySelectorAll(".divisao");

var validacao = true;

for(var i = 0; i < valores.length; i++){
    var divisao = valores[i];

    var tdValor1 = divisao.querySelector(".info-valor1");
    var valor1 = parseInt(tdValor1.textContent);
    
    var tdValor2 = divisao.querySelector(".info-valor2");
    var valor2 = parseInt(tdValor2.textContent);

    if (valor2 <= 0){
        validacao = false;
    }
    
    var tdResultado = divisao.querySelector(".info-resultado");
    
    if (validacao){
        var resultado = valor1 + valor2;
        tdResultado.textContent = resultado;
    }
    else{
        tdResultado.textContent = "Digite outro valor!";
        divisao.classList.add("incorreto");
    }

    
}