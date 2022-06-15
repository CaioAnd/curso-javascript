function validaData() {
    //Definindo validação da data
    let hoje = new Date().toISOString().slice(0, 10);

    var input1 = document.getElementById("data-inicial");
    var input2 = document.getElementById("data-final");

    input1.setAttribute('max', hoje);
    input2.setAttribute('max', hoje);
}