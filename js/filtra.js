var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
  document.querySelectorAll(".paciente").forEach((paciente) => {
    console.log(this.value);
    var tdNome = paciente.querySelector(".info-nome");
    var nome = tdNome.textContent;
    if (!nome.includes(this.value)) {
      paciente.classList.add("invisivel");
    } else {
      paciente.classList.remove("invisivel");
    }
  });
});

  // for (var i = 0; i < pacientes.lentght ; i++){
  // var paciente = pacientes [i]
  // var tdNome = paciente.querySelector(".info-nome")
  // var nome = paciente.textContent;
  //      if (nome != this.value) {
  //       paciente.classList.add("invisivel");
  //     } else {
  //       paciente.classList.remove("invisivel");
  //     }
  //   }
  
