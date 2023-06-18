import throttle from 'lodash.throttle';
const LOCAL_KEY = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', throttle(storageFormData, 500));
formEl.addEventListener('submit', onFormSubmit);
reloadPage();
function storageFormData(el) {
  formData[el.target.name] = el.target.value.trim();
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}
function onFormSubmit(el) {
  el.preventDefault();
  if (formEl.email.value === '' || formEl.message.value === '') {
    return alert('Будь ласка, заповніть усі поля!');
  }
  console.log({ email: formEl.email.value, message: formEl.message.value });
  formEl.reset();
  localStorage.removeItem(LOCAL_KEY);
  formData = {};
}
function reloadPage() {
  if (formData) {
    formEl.email.value = formData.email || '';
    formEl.message.value = formData.message || '';
  }
}
