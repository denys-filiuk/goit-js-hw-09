const formData = { email: '', message: '' };

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', formSubmit);
form.addEventListener('input', formInput);

function loadFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
}

window.addEventListener('load', loadFormData);

function formInput(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function formSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const email = form.elements.email;
  const message = form.elements.message;

  if (formData.email !== '' && formData.message !== '') {
    console.log(formData);
    formData.email = '';
    formData.message = '';
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
  } else {
    alert('Fill please all fields');
  }
}
