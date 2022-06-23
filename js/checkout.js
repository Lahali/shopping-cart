const form = document.getElementById("form");
form.addEventListener("submit", validate);

// Exercise 6
function validate(event) {
  //event.preventDefault()

  let error = 0;
  // Get the input fields
  const fName = document.getElementById("fName");
  const fLastName = document.getElementById("fLastN");
  const fEmail = document.getElementById("fEmail");
  const fPassword = document.getElementById("fPassword");
  const fAddress = document.getElementById("fAddress");
  const fPhone = document.getElementById("fPhone");

  // Get the error elements
  const errorName = document.getElementById("errorName");
  const errorEmail = document.getElementById("errorEmail");

  // Validate fields entered by the user: name, phone, password, and email
  
  //Uso de expresiones regulares para asegurarnos de que el formato de nombre y email es correcto
  
  // \d => busca números arábigos
  const itIsANumber = /\d/;

  // \D => busca letras latinas
  const itIsALetter = /\D/;
 
  // esta línea busca que el mail tenga un formato correcto
  const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/

  // const passwordValidation =

  if (fName.value === "" || fName.value === itIsANumber) {
    error++;
    fName.classList.add("is-invalid")
    console.log("te has equivocado");
  }

  if (fLastName.value === "" || fLastName === itIsANumber) {
    error++
    fLastName.classList.add("is-invalid")
    console.log('escribe bien')
  }
   
  if (fPhone.value === "" || fPhone === itIsALetter) {
    error++
    fPhone.classList.add("is-invalid")
    console.log('eso no es un teléfono')
  }

  if (fEmail.value === "" || fEmail !== emailValidation ) {
    error++;
    fEmail.classList.add("is-invalid")
    console.log('no sabes escribir un email')
  }

  if (error > 0) {
    alert("Error");
  } else {
    alert("OK");
  }
}
