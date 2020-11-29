$(document).ready(() => {
    // Getting references to our form and input
    const $signUpForm = $('form.signupModal');
    const $firstNameInput = $('input#firstname-input');
    const $lastNameInput = $('input#lastname-input');
    const $emailInput = $('input#signupEmail-input');
    const $passwordInput = $('input#signupPassword-input');
    const $userTypeInput = $('select#userType-input');
    const $tutorSubjectsInput = $('select#tutorSubjects-input');

    // When the signup button is clicked, we validate the email and password are not blank
    $signUpForm.on('submit', (event) => {
        event.preventDefault();

        const userData = {
            firstName: $firstNameInput.val().trim(),
            lastName: $lastNameInput.val().trim(),
            email: $emailInput.val().trim(),
            password: $passwordInput.val().trim(),
            userType: $userTypeInput.val(),
        };

        if (!userData.firstName || !userData.lastName || !userData.email || !userData.password) {
            return;
        }
        // If we have an email and password, run the signUpUser function
        signUpUser(userData);
        $firstNameInput.val('');
        $lastNameInput.val('');
        $emailInput.val('');
        $passwordInput.val('');
    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(user) {
        $.post('/api/signup', user)
            .then((newUser) => {
                // save the curent user details to session storage
                sessionStorage.setItem('userId', newUser.id);
                sessionStorage.setItem('userEmail', newUser.email);
                sessionStorage.setItem('userFirstName', newUser.firstName);
                sessionStorage.setItem('userLastName', newUser.lastName);
                sessionStorage.setItem('userType', newUser.userType);

                // user created so enter the tutor subjects if necessary
                if (newUser.userType === 'tutor') {
                    let selectedSubjects = $tutorSubjectsInput.val();

                    $.post(`/api/tutorsubjects/${newUser.id}`, { 'tutorSubjects[]': selectedSubjects }
                    )
                    .catch(handleLoginErr);
                }
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
