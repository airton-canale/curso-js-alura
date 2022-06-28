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

var pesoOk = validaPesoIndex(peso)
var alturaOk = validaAlturaIndex(altura)

if (alturaOk && pesoOk){
  var imc = peso / (altura * altura);
  tdImc.textContent = imc.toFixed(2)
  var imc = calculaImc(peso,altura)
  }

if ( peso <= 0 || peso >= 1000){
  pesoOk = false
  tdPeso.textContent = (peso + " " + "Peso Inválido!")
}

if ( altura <= 0 || altura >= 3){
  alturaOk = false
  tdAltura.textContent = `${altura} Altura Inválida!`
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

function calculaImc(peso,altura){
  var imc = 0
  imc = peso / (altura * altura)
  return imc.toFixed(2)
}

function validaPesoIndex(peso){
  return peso >=0 && peso <= 200
  }
  

  function validaAlturaIndex(altura){
    return altura >= 0 && altura < 3
    }
  
  


