var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    //Maneira explicativa de remover tr
    
    /* var alvoElemento = event.target;
    var paiDoAlvo = alvoElemento.parentNode;

    paiDoAlvo.remove(); */

    //Adicionando animação para remover tr
    event.target.parentNode.classList.add("fadeOut");

    //define delay para executar função
    setTimeout(function(){
        //maneira mais prática de remover tr
        event.target.parentNode.remove();
    },500);

    
})