function mostrarInputAdicional(checkbox) {
    var inputAdicional = document.getElementById("inputAdicional");
    if (checkbox.checked) {
      inputAdicional.classList.remove("d-none"); // Remove a classe "d-none" para exibir o input adicional
    } else {
      inputAdicional.classList.add("d-none"); // Adiciona a classe "d-none" para ocultar o input adicional
    }
  }
  