const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

function initializeForm() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }

  form.addEventListener('input', event => {
    const { name, value } = event.target;
    formData[name] = value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });

  form.addEventListener('submit', event => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    console.log(formData);

    form.reset();
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
  });
}

document.addEventListener('DOMContentLoaded', initializeForm);
