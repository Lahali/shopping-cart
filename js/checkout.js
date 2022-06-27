//evitamos que el formulario corra el código.

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault(validate);
});

// Exercise 7
function validate() {

  let error = 0;
  // Get the input fields
  const fName = document.getElementById("fName");
  const fLastName = document.getElementById("fLastN");
  const fEmail = document.getElementById("fEmail");
  const fPassword = document.getElementById("fPassword");
  const fAddress = document.getElementById("fAddress");
  const fPhone = document.getElementById("fPhone");

  // Validate fields entered by the user: name, phone, password, and email

  //Uso de expresiones regulares para asegurarnos de que el formato de nombre y email es correcto
  const regExp = {
    phone: /^[0-9]{9}$/,
    nameAndSurname: /^[A-Za-z]{3,}$/,
    address: /^(?! )[A-Za-z0-9\s]{3,}$/,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    password: /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/,
  };

  if (regExp.nameAndSurname.test(fName.value)) {
    fName.classList.remove("is-invalid")
    fName.classList.add("is-valid")
    console.log("correcto! has esctrito un nombre");
  } else {
    error++;
    fName.classList.remove("is-valid")
    fName.classList.add("is-invalid");
    console.log(error);
  }

  if (regExp.nameAndSurname.test(fLastName.value)) {
    fLastName.classList.remove("is-invalid")
    fLastName.classList.add("is-valid")
    console.log("apellido bien!");
  } else {
    error++;
    fLastName.classList.remove("is-valid")
    fLastName.classList.add("is-invalid");
    console.log(error);
  }

  if (regExp.email.test(fEmail.value)) {
    fEmail.classList.remove("is-invalid")
    fEmail.classList.add("is-valid")
    console.log("email correcto");
  } else {
    error++;
    fEmail.classList.remove("is-valid")
    fEmail.classList.add("is-invalid");
  }

  if (regExp.password.test(fPassword.value)) {
    fPassword.classList.remove("is-invalid")
    fPassword.classList.add("is-valid")
    console.log("contraseña bien");
  } else {
    error++;
    fPassword.classList.remove("is-valid")
    fPassword.classList.add("is-invalid");
  }

  if (regExp.address.test(fAddress.value)) {
    fAddress.classList.remove("is-invalid")
    fAddress.classList.add("is-valid")
    console.log("buena dirección");
  } else {
    error++;
    fAddress.classList.remove("is-valid")
    fAddress.classList.add("is-invalid");
  }

  if (regExp.phone.test(fPhone.value)) {
    fPhone.classList.remove("is-invalid")
    fPhone.classList.add("is-valid")
    console.log("telefono bien");
  } else {
    error++;
    fPhone.classList.remove("is-valid")
    fPhone.classList.add("is-invalid");
  }

  if (error > 0) {
    alert("Revisa los datos, hay algo que no va bien.");
  } else {
    alert("Genial! Tus datos han sido guardados.");
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault(validate);
});