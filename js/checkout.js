
//evitamos que el formulario corra el código.

const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
	event.preventDefault(validate)
})


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
  const regExp = {
    phone: /^[0-9]{9}$/,
    nameAndSurname: /^[A-Za-z]{3,}$/,
    address: /^(?! )[A-Za-z0-9\s]{3,}$/,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    password: /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/,
  };

  if (regExp.nameAndSurname.test(fName.value)){
     console.log("correcto! has esctrito un nombre")
  } else {
    error++
    fName.classList.add("is-invalid");
    console.log(error)
  }

  if (regExp.nameAndSurname.test(fLastName.value)) {
    console.log("apellido bien!")
  } else {
    error++
    fLastName.classList.add("is-invalid")
    console.log(error)
  }

  if (regExp.email.test(fEmail.value)) {
    console.log("email correcto")
  } else {
    error++
    fEmail.classList.add("is-invalid")
  }

  if (regExp.password.test(fPassword.value)) {
    console.log("contraseña bien")
  } else {
    error++
    fPassword.classList.add("is-invalid")
  }

  if (regExp.address.test(fAddress.value)) {
    console.log("buena dirección")
  } else {
    error++
    fAddress.classList.add("is-invalid")
  }

  if (regExp.phone.test(fPhone.value)) {
    console.log("telefono bien")
  } else {
    error++
    fPhone.classList.add(fPhone.value)
  }


 



  if (error > 0) {
    alert("Error");
  } else {
    alert("OK");
  }
}
