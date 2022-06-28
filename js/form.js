var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  var paciente = adicionarPacienteFormulario(form);

  var pacienteTr = montaTr(paciente);

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
  pacienteTr.appendChild(montaTd(textoPesoPaciente(peso), "info-peso"));
  pacienteTr.appendChild(montaTd(textoAlturaPaciente(altura), "info-altura"));
  pacienteTr.appendChild(montaTd(gordura, "info-gordura"));
  pacienteTr.appendChild(
    montaTd(textoImcPaciente(peso, altura, imc), "info-imc")
  );

  return pacienteTr;
}

function textoPesoPaciente(peso) {
  var pesoOk = validaPesoIndex(peso);
  if (pesoOk) return peso;
  return `Peso ${peso} Inválido!`;
}

function textoAlturaPaciente(altura) {
  var alturaOk = validaAlturaIndex(altura);
  if (alturaOk) return altura;
  return `Altura ${altura} Inválida!`;
}

function textoImcPaciente(peso, altura, imc) {
  var pesoOk = validaPesoIndex(peso);
  var alturaOk = validaAlturaIndex(altura);
  var imc = peso / (altura * altura);

  if (alturaOk && pesoOk) return imc;
  console.log({ peso, altura, imc });
  return `IMC ${imc.toFixed(2)} Inválido!`;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList = classe;
  return td;
}
