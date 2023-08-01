const form = document.querySelector(".form-validates");
let isValidateMother = false;
const babyMotherEmailInput = document.getElementById("baby-mother-email");
const babyMotherNICInput = document.getElementById("baby-mother-nic");

function babySubmit() {
    console.log(34853768975987698)
    // event.preventDefault();

    const inputFields = form.querySelectorAll("input[required]");
    let allFieldsValid = true;

    for (const inputField of inputFields) {
        const errorMessageElement = inputField.parentNode.querySelector(".error-message");
        const errorMessagePlaceholder = inputField.parentNode.querySelector(".error-message-placeholder");

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

    if (!allFieldsValid) {
        console.log("Form contains errors. Please fill in all required fields.");
    } else if(!isValidateMother) {
        console.log('Mother not validate')
    }
     else {
        console.log("Form data is valid. Performing form submission...");
    }
};

function getMother() {
    const motherEmail = "example@example.com";
    isValidateMother = true;
    babyMotherEmailInput.value = motherEmail;
    babyMotherNICInput.disabled = true;
}

function resetMother() {
    isValidateMother = false;
    babyMotherNICInput.disabled = false;
    babyMotherNICInput.value = '';
    babyMotherEmailInput.value = '';
}