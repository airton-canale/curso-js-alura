var pacientes = document.querySelectorAll(".paciente");
pacientes.forEach((paciente) => {
  paciente.addEventListener("dblclick", (event) => {
    paciente.remove();
  });
});
