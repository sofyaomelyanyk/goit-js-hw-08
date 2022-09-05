import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

const LOCAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

const valueForm = {};
onLocalStorage();

function onFormInput(event) {
  valueForm[event.target.name] = event.target.value;
  localStorage.setItem(LOCAGE_KEY, JSON.stringify(valueForm));
}

function onLocalStorage() {
  const savedValue = JSON.parse(localStorage.getItem(LOCAGE_KEY));

  if (savedValue) {
    email.value = savedValue.email;
    message.value = savedValue.message;
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(LOCAGE_KEY)));
  localStorage.removeItem(LOCAGE_KEY);
}
