    const validateForm = (email,password) => {
        if(!email || !password) {
            return {isValid: false, message: 'Email and password cannot be empty.'};
        }
        if (password.length < 8) {
            return{isValid: false, message: 'Password must be atleast 8 characters long.'};
        }
        return { isValid: true, message: 'Validation successful!'};
    };

    export { validateForm };