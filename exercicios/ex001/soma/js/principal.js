var valores = document.querySelectorAll(".soma");

for(var i = 0; i < valores.length; i++){
    var soma = valores[i];

    var tdValor1 = soma.querySelector(".info-valor1");
    var valor1 = parseInt(tdValor1.textContent);
    
    var tdValor2 = soma.querySelector(".info-valor2");
    var valor2 = parseInt(tdValor2.textContent);
    
    var tdResultado = soma.querySelector(".info-resultado");
    
    var resultado = valor1 + valor2;
    tdResultado.textContent = resultado;
}