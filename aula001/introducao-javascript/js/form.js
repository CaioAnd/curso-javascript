var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    // Extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    //Validação do formulário

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        var mensagemErro = document.querySelector("#mensagem-erro");
        mensagemErro.textContent = erros;
        return;
    }

    // Criando a td e a tr do paciente
    
    var pacienteTr = montaTr(paciente);
    

    // Adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
});

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

    //Criando base da tablea vazia
    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

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

    return erros;

}