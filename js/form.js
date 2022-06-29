var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  var paciente = adicionarPacienteFormulario(form);

  var pacienteTr = montaTr(paciente);


  var pesoOk = validaPesoIndex(peso);
  if(!pesoOk){
    console.log("paciente invalido")
    // var mensagemErro = document.querySelector("#mensagem-erro")
    // mensagemErro.textContent = 
    return;
  }

  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);
  form.reset();
});

function adicionarPacienteFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };
  return paciente;
}

function montaTr({ nome, peso, altura, gordura, imc }) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(nome, "info-nome"));
  pacienteTr.appendChild(montaTd(validaPesoPaciente(peso), "info-peso"));
  pacienteTr.appendChild(montaTd(validaAlturaPaciente(altura), "info-altura"));
  pacienteTr.appendChild(montaTd(gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(validaImcPaciente(peso, altura, imc), "info-imc"));

  return pacienteTr;
}

function validaPesoPaciente(peso) {
  var pesoOk = validaPesoIndex(peso);
  if (pesoOk) return peso
  return "O peso eh invalido"
  // console.log("paciente invalido")
  // if (pesoOk) return peso;
  // return `Peso ${peso} Inválido!`;
}

function validaAlturaPaciente(altura) {
  var alturaOk = validaAlturaIndex(altura);
  if (alturaOk) return altura;
  return `Altura ${altura} Inválida!`;
}

function validaImcPaciente(peso, altura, imc,) {
  var pesoOk = validaPesoIndex(peso);
  var alturaOk = validaAlturaIndex(altura);
  var imc = peso / (altura * altura);
  
  if (alturaOk && pesoOk) return imc;
  return `IMC ${imc.toFixed(2)} Inválido!`;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList = classe;
  return td;
}
