var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", () => {

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", () => {
    var resposta = xhr.responseText;
    var pacientes = JSON.parse(resposta);

    pacientes.forEach((paciente) => {
      adicionaPacienteNaTabela(paciente);
    });
  });

  xhr.send();
});
