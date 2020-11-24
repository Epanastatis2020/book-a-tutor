$(document).ready(() => {
    // Getting references to our form and inputs
    const loginForm = $('form.login');
    const emailInput = $('input#email-input');
    const passwordInput = $('input#password-input');
    const userTypeInput = $('select#userType-input');

    // When the form is submitted, we validate there's an email and password entered
    loginForm.on('submit', (event) => {
        event.preventDefault();
        const userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
            userType: userTypeInput.val(),
        };

        if (!userData.email || !userData.password) {
            return;
        }

        // If we have an email and password we run the loginUser function and clear the form
        loginUser(userData.email, userData.password);
        emailInput.val('');
        passwordInput.val('');
    });

    // loginUser does a post to our "api/login" route and if successful, redirects us to the members page
    function loginUser(email, password) {
        $.post('/api/login', {
            email: email,
            password: password,
        })
            .then((userData) => {
                // save the curent user details to session storage
                sessionStorage.setItem('userId', userData.id);
                sessionStorage.setItem('userEmail', userData.email);
                sessionStorage.setItem('userFirstName', userData.firstName);
                sessionStorage.setItem('userLastName', userData.lastName);
                sessionStorage.setItem('userType', userData.userType);
                window.location.replace('/members');
                // If there's an error, log the error
            })
            .catch((err) => {
                console.log(err);
            });
    }
});
