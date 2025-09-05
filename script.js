//selecting the elements i need to work with
const loginForm = document.querySelector('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

//handling events using event listener tot the form for submitting
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    //getting the values
    const email = emailInput.value;
    const password = passwordInput.value;

    //validation logic
    if(email === '' || password === '' ){
        errorMessage.textContent = "Email and password cannot be empty";
        errorMessage.style.color = 'red';
    } else if (password.length < 8) {
        errorMessage.textContent = 'Password must be atleast 8 characters long.';
        errorMessage.style.color = 'red';
    } else {
        errorMessage.textContent = 'Login successful!';
        errorMessage.style.color = 'green';
        console.log('Form submitted with:', {email,password});
    }
});