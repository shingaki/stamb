function signUpForm() {
    var firstName = document.forms["signUpForm"]["first_name"];
    var lastName = document.forms["signUpForm"]["last_name"];
    var username = document.forms["signUpForm"]["user_name"];
    var email = document.forms["signUpForm"]["email"];
    var password = document.forms["signUpForm"]["password"];
    var confirmPassword = document.forms["signUpForm"]["confirm"];

    if (firstName.value === "") {
        window.alert("Please enter your first name");
        firstName.focus();
        return false;
    } 
    if (lastName.value === "") {
        window.alert ("Please enter your last name");
        lastName.focus();
        return false;
    }
    if (username.value === "") {
        window.alert ("Please enter a username");
        username.focus();
        return false;
    }
    if (email.value === "") {
        window.alert ("Please enter an email in this format: example@example.com");
        lastName.focus();
        return false;
    }
    if (password.value === "") {
        window.alert ("Please enter a password");
        password.focus();
        return false;
    }
    if (confirmPassword.value === "") {
        window.alert ("Please confirm your password");
        confirmPassword.focus();
        return false;
    }
    function checkPasswordValidity(signUpForm) {
        password = form.password.value,
        confirmPassword = form.confirmPassword.value
        if (password === " ")
            window.alert("Please enter a password");
        else if (confirmPassword === "")
            alert("Please enter a confirmation password");
        else if (password != confirmPassword) {
            window.alert("\nPasswords did not match")
            return false;
        } else {
            alert("Passwords match")
            return true;
        }
    };
};