const signInForm = document.querySelector(".sign-in-form");
const signUpForm = document.querySelector(".sign-up-form");

function switchToSignUp() {
    $("#sign-in-page").hide();
    $("#sign-up-page").show();
}

function switchToSignIn() {
    $("#sign-up-page").hide();
    $("#sign-in-page").show();
}

function next() {
    $("#first").hide();
    $("#second").show();
}

function signIn() {
    const isValid = isValidForm(signInForm);

    if (!isValid) {
        console.log("Form contains errors. Please fill in all required fields.");
    } else {
        console.log("Form data is valid. Performing form submission...");
    }
}

function isValidForm(form) {
    const inputFields = form.querySelectorAll("input[required]");
    let allFieldsValid = true;

    for (const inputField of inputFields) {
        const errorMessageElement =
            inputField.parentNode.querySelector(".error-message");
        const errorMessagePlaceholder = inputField.parentNode.querySelector(
            ".error-message-placeholder"
        );

        inputField.addEventListener("input", function () {
            if (inputField.checkValidity()) {
                errorMessageElement.style.display = "none";
                errorMessagePlaceholder.style.display = "block";
            } else {
                errorMessageElement.style.display = "block";
                errorMessagePlaceholder.style.display = "none";
            }
        });

        if (!inputField.checkValidity()) {
            allFieldsValid = false;
            errorMessageElement.style.display = "block";
            errorMessagePlaceholder.style.display = "none";
        } else {
            errorMessageElement.style.display = "none";
            errorMessagePlaceholder.style.display = "block";
        }
    }

    return allFieldsValid;
}
