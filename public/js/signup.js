$(document).ready(() => {
    // Getting references to our form and input
    const signUpForm = $('form.signup');
    const firstNameInput = $('input#firstname-input');
    const lastNameInput = $('input#lastname-input');
    const emailInput = $('input#email-input');
    const passwordInput = $('input#password-input');
    const userTypeInput = $('select#userType-input');

    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on('submit', (event) => {
        event.preventDefault();
        console.log(`UserType: ${userTypeInput.val()}`);
        const userData = {
            firstName: firstNameInput.val().trim(),
            lastName: lastNameInput.cal().trim(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
            userType: userTypeInput.val(),
        };

        if (!userData.firstName || !userData.lastName || !userData.email || !userData.password) {
            return;
        }
        // If we have an email and password, run the signUpUser function
        signUpUser(userData);
        firstNameInput.val('');
        lastNameInput.val('');
        emailInput.val('');
        passwordInput.val('');
    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(user) {
        $.post('/api/signup', user)
            .then(() => {
                window.location.replace('/members');
                // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $('#alert .msg').text(err.responseJSON);
        $('#alert').fadeIn(500);
    }
});
