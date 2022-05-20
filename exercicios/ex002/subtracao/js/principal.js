var botaoCalcula = document.querySelector("#calcular");
botaoCalcula.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-calcula");

    var elem1 = parseInt(form.elem1.value);
    var elem2 = parseInt(form.elem2.value);

    var resultado = elem1 - elem2;

    alert("Resultado: "+resultado);
});