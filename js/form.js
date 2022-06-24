var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click",adicionarPaciente)

function adicionarPaciente(event){
  event.preventDefault()

  var form = document.querySelector("#form-adiciona")

  // Extraindo informações do paciente do form

  var nome = form.nome.value 
  var peso = form.peso.value 
  var altura = form.altura.value  
  var gordura = form.gordura.value
  
  // Cria a tabela do paciente
  var pacienteTr = document.createElement("tr")

  var nomeTd = document.createElement("td")
  var pesoTd = document.createElement("td")
  var alturaTd = document.createElement("td")
  var gorduraTd = document.createElement("td")
  var imcTd = document.createElement ("td")
  
  var pesoOk = validaPeso(peso)
  var alturaOk = validaAltura(altura)
  var imcOk = alturaOk && pesoOk

 nomeTd.textContent = nome
 pesoTd.textContent = pesoOk ? peso : `Peso ${peso} Inválido!`
 alturaTd.textContent = alturaOk ? altura : `Altura ${altura} Inválida!`
 imcTd.textContent = imcOk ? calculaImc(peso,altura) : `IMC inválido!` 

 gorduraTd.textContent = gordura

 pacienteTr.appendChild(nomeTd)
 pacienteTr.appendChild(pesoTd)
 pacienteTr.appendChild(alturaTd)
 pacienteTr.appendChild(gorduraTd)
 pacienteTr.appendChild(imcTd)

  var tabela = document.querySelector('#tabela-pacientes')

  tabela.appendChild(pacienteTr)
}
