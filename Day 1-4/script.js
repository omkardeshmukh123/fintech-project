import { validateForm } from './validation.js';
//selecting the elements i need to work with
const loginForm = document.querySelector('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

//handling events using event listener tot the form for submitting
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    //call the imported function
    const validationResult = validateForm(emailInput.value , passwordInput.value)

    errorMessage.textContent = validationResult.message;
    errorMessage.style.color = validationResult.isValid ? 'green' : 'red';

    if (validationResult.isValid) {
        console.log('Form is valid! Submitting...');
    }
});