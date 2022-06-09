var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    // Extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    //Validação do formulário

    var erros = validaPaciente(paciente);
    console.log(erros);
    if (erros.length > 0) {
        exibeMensagemDeErro(erros);
        return;
    }

    // Adicionando o paciente na tabela
    adicionaPacienteNaTabela(paciente);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
}

function exibeMensagemDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form){

    //Cria obj paciente com todas suas caracteísticas

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return (paciente);

}

function montaTr(paciente){

    //Criando base da tabela vazia
    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    //Adicionando classes a tabela
    pacienteTr.classList.add("paciente");

    nomeTd.classList.add("info-nome");
    pesoTd.classList.add("info-peso");
    alturaTd.classList.add("info-altura");
    gorduraTd.classList.add("info-gordura");
    imcTd.classList.add("info-imc");

    //Adicionando conteúdo a tabela 
    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    //Organizando tabela (Colocando os tds dentro da tr)

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return (pacienteTr);

}

function validaPaciente(paciente) {

    var erros =[];

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido!");
    }
    
    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválido!");
    }

    if ( paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if ( paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if ( paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if ( paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    return erros;

}