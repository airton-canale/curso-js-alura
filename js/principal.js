var titulo = document.querySelector(".titulo")
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){

var paciente = pacientes[i]

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent; 

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent

var tdImc = paciente.querySelector(".info-imc");

var pesoOk = true
var alturaOk = true

if (alturaOk && pesoOk){
  var imc = peso / (altura * altura);
  tdImc.textContent = imc.toFixed(2)
  }

if ( peso <= 0 || peso >= 1000){
  pesoOk = false
  tdPeso.textContent = (peso + " " + "Peso Inválido!")
}

if ( altura <= 0 || altura >= 3){
  alturaOk = false
  tdAltura.textContent = (altura + " " + "Altura Inválida!")
}

if ( pesoOk == false && alturaOk == false){
  tdImc.textContent = ("IMC Inválido!")
  paciente.classList.add("paciente-invalido")
}

if ( pesoOk && alturaOk == false ){
  tdImc.textContent = ("Altura Inválida!")
  paciente.classList.add ("paciente-invalido")
}

if ( pesoOk == false && alturaOk){
  tdImc.textContent = ("Peso Inválido!")
  paciente.classList.add ("paciente-invalido")
}
}
function selecionarBotao(event){
  event.preventDefault()

  var form = document.querySelector("#form-adiciona")
  console.log(form)

  var nome = form.nome.value 
  var peso = form.peso.value 
  var altura = form.altura.value  
  var gordura = form.gordura.value
  
  console.log({nome, peso, altura, gordura})

  var pacienteTr = document.createElement("tr")

  var nomeTd = document.createElement("td")
  var pesoTd = document.createElement("td")
  var alturaTd = document.createElement("td")
  var gorduraTd = document.createElement("td")
  var imcTd = document.createElement ("td")


 nomeTd.textContent = nome
 pesoTd.textContent = peso
 alturaTd.textContent = altura
 gorduraTd.textContent = gordura
 imcTd.textContent = imc

 pacienteTr.appendChild(nomeTd)
 pacienteTr.appendChild(pesoTd)
 pacienteTr.appendChild(alturaTd)
 pacienteTr.appendChild(gorduraTd)
 pacienteTr.appendChild(imcTd)

//  ;[nomeTd, pesoTd, alturaTd, gorduraTd, imcTd].forEach(td => pacienteTr.appendChild(td))
// document.querySelector('#tabela-pacientes').appendChild(pacienteTr)
  var tabela = document.querySelector('#tabela-pacientes')
  tabela.appendChild(pacienteTr)

}

var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click",selecionarBotao)




