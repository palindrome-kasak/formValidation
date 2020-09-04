// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

// Take 're' as a constant(const)
// And validate that string with regular expression
// In all these functions
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Bonus Points if you can convert these funtion in and arrow funtions

function validateName() {
  const name = document.getElementById('name');
  // re
  //name must be alphabet and in between 2 to 20 charcters
  const re = /^([a-zA-Z]{2,20}$)/;
  
  if(!re.test(name.value)){
    return name.classList.add('is-invalid');
  } else {
    return name.classList.remove('is-invalid');
  }
}

function validateZip() {
  const zip = document.getElementById('zip');
  // re
  // zipcode must be 6 digit number 
  const re = /^([0-9]{6}$)/;
  if(!re.test(zip.value)){
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
  }
}

function validateEmail() {
  const email = document.getElementById('email');
  //  re
  // email must in the form of abc@gmail/yahoo.com/in/media
  const re = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  if(!re.test(email.value)){
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function validatePhone() {
  const phone = document.getElementById('phone');
  // re
  // phoneNum must be 10  digit number
  const re = /^([0-9]{10}$)/;

  if(!re.test(phone.value)){
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}



