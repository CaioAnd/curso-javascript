function validaData() {
    //Definindo validação da data
    let hoje = new Date().toISOString().slice(0, 10);

    var input = document.getElementById("data");

    input.setAttribute('max', hoje);
}