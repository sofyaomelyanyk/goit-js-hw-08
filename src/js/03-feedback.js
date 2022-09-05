import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

const LOCAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

onLocalStorage();

const valueForm = {};

function onFormInput(event) {
  valueForm.email = form.email.value;
  valueForm.message = form.message.value;

  localStorage.setItem(LOCAGE_KEY, JSON.stringify(valueForm));
}

function onFormSubmit(event) {
  console.log(JSON.parse(localStorage.getItem(LOCAGE_KEY)));
  event.preventDefault();

  event.currentTarget.reset();
  localStorage.removeItem(LOCAGE_KEY);
}

function onLocalStorage() {
  const savedValue = JSON.parse(localStorage.getItem(LOCAGE_KEY));

  if (savedValue) {
    email.value = savedValue.email;
    message.value = savedValue.message;
  }
}
