var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click",function(event){
  event.preventDefault()

  var form = document.querySelector("#form-adiciona")
  var paciente = adicionarPacienteFormulario(form)
  
  var pacienteTr = montaTr(paciente)

  var tabela = document.querySelector('#tabela-pacientes')

  tabela.appendChild(pacienteTr)

})
  
  function adicionarPacienteFormulario(form){

    var paciente = {
    nome: form.nome.value,
    peso: form.peso.value, 
    altura: form.altura.value,  
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
    return paciente
  }
  
  function montaTr(paciente){
    
    var pacienteTr = document.createElement("tr")
    var nomeTd = document.createElement("td")
    var pesoTd = document.createElement("td")
    var alturaTd = document.createElement("td")
    var gorduraTd = document.createElement("td")
    var imcTd = document.createElement("td")

    nomeTd.textContent = paciente.nome
    pesoTd.textContent = paciente.peso
    alturaTd.textContent = paciente.altura  
    gorduraTd.textContent = paciente.gordura
    imcTd.textContent = paciente.imc
    
    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    return pacienteTr
  }
  
  function textoPesoEalturaPaciente({peso}){
    var peso = validaPesoIndex(peso)
    if (peso) return (
      pacienteTr.appendChild(peso)
    )
    else peso.textContent = `Peso ${peso} Inválido!`
    
  }
  
  
  // function textoAlturaPaciente({altura}){
  //   var alturaOk = validaAlturaIndex(altura)
  //   var alturaTd = altura
  //   if (alturaOk) return(
  //     alturaTd.textContent = `Altura ${altura} Inválida!`
  //   )
  //   else var alturaTd = document.createElement("td")

  // }
  // var imcOk = alturaOk && pesoOk

  // function textoImcPaciente({peso, altura}){
  //   var imcOk = calculaImc(peso, altura)
  //   if (imcOk) return(
  //     imcTd.textContent = `IMC inválido!` 
  //   )
  //   else var imcTd = document.createElement ("td")
  // }


