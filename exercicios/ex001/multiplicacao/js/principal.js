var valores = document.querySelectorAll(".multiplicacao");

for(var i = 0; i < valores.length; i++){
    var multiplicacao = valores[i];

    var tdValor1 = multiplicacao.querySelector(".info-valor1");
    var valor1 = parseInt(tdValor1.textContent);
    
    var tdValor2 = multiplicacao.querySelector(".info-valor2");
    var valor2 = parseInt(tdValor2.textContent);
    
    var tdResultado = multiplicacao.querySelector(".info-resultado");
    
    var resultado = valor1 * valor2;
    tdResultado.textContent = resultado;
}