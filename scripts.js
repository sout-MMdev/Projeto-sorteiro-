function generatorNumber() {
  const min = Math.ceil(document.querySelector(".input-min").value)
  const max = Math.floor(document.querySelector(".input-max").value)
        if ( min >= max) {
              const showAlert = document.querySelector(".information-alert").value = " O valor minimo deve ser MENOR do que o valor máximo"
            } 
            else {
                  const result = Math.floor(Math.random() * (max - min + 1)) + min;
                  const showOutput = document.querySelector(".information-output").value = result;
                  }

}