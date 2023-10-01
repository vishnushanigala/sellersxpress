const form = document.querySelector('form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // validate email and password here
  const validEmail = validateEmail(email.value);
  const validPassword = validatePassword(password.value);

  if (validEmail && validPassword) {
    // send data to server and redirect user to home page
    console.log('Form submitted successfully');
  } else {
    // show error message
    console.log('Invalid email or password');
  }
});

function validateEmail(email) {
  // validate email here
  return true;
}

function validatePassword(password) {
  // validate password here
  return true;
}
const form = document.querySelector('form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // validate email and password here
  const validEmail = validateEmail(email.value);
  const validPassword = validatePassword(password.value);

  if (validEmail && validPassword) {
    // send data to server and redirect user to home page
    console.log('Form submitted successfully');
  } else {
    // show error message
    console.log('Invalid email or password');
  }
});

function validateEmail(email) {
  // validate email here
  return true;
}

function validatePassword(password) {
  // validate password here
  return true;
}
