var valores = document.querySelectorAll(".subtracao");

for(var i = 0; i < valores.length; i++){
    var subtracao = valores[i];

    var tdValor1 = subtracao.querySelector(".info-valor1");
    var valor1 = parseInt(tdValor1.textContent);
    
    var tdValor2 = subtracao.querySelector(".info-valor2");
    var valor2 = parseInt(tdValor2.textContent);
    
    var tdResultado = subtracao.querySelector(".info-resultado");
    
    var resultado = valor1 - valor2;
    tdResultado.textContent = resultado;
}