var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", () => {
  console.log("Buscando pacientes");

  var xhr = new XMLHttpRequest();

  xhr.open("GET, https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", () => {
    var resposta = xhr.responseText;

    var pacientes = JSON.parser(resposta);

    pacientes.forEach((paciente) => {
      adicionaPacienteNaTabela(paciente);
    });
  });

  xhr.send();
});
