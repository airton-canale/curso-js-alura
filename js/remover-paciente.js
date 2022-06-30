var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("table")
tabela.addEventListener("dbclick",(event) => {
  event.target.parentNode.remove()
})













  // pacientes.forEach((paciente) => {
  //   paciente.addEventListener("dblclick", () => {
  //     paciente.remove();
  // });
  // });