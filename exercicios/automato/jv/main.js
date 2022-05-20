var i = 0;
var estado = 0;
var sucesso = false;
var terminou = false;

var botaoTeste = document.querySelector("#botao-teste");
botaoTeste.addEventListener("click",function(event){
    event.preventDefault();

    i = 0;
    estado = 0;
    sucesso = false;
    terminou = false;

    var form = document.querySelector("#form-recebe");

    var entrada = form.entrada.value;

    do {
        switch (estado) {
        case 0:
            q0(entrada);
            break;
        case 1:
            q1(entrada);
            break;
        case 2:
            q2(entrada);
            break;
        }
    } while (!terminou);

    if (sucesso) {
        alert("Deu bom");
    }
    else {
        alert("Deu ruim");
    }
})

function q0(entrada){
    const chars = entrada.split('');

    if (chars[i] == 'a') {
        estado = 1;
        i++;
        console.log("q0"+estado+" "+i);
    }
    else {
        terminou = true;
    }
}

function q1(entrada){
    const chars = entrada.split('');

    if (chars[i] == 'b') {
        estado = 2;
        i++;
    }
    else {
        terminou = true;
    }
}

function q2(entrada){
    const chars = entrada.split('');

    if (chars[i] == null) {
        terminou = true;
        sucesso = true;
    }
    else {
        terminou = true;
    }
}