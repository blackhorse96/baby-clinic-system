const signInForm = document.querySelector(".sign-in-form");
const signUpForm = document.querySelector(".sign-up-form");

function dashboardLoad() {
    $("#auth").hide();
    $("#dashboard").show();
}

function authLoad() {
    $("#dashboard").hide();
    $("#auth").show();
}

$(document).ready(function() {
    console.log(getToken)
    if (getToken) {
        dashboardLoad();
    } else {
        authLoad();
    }
});

function switchToSignIn() {
    $("#sign-up-page").hide();
    $("#sign-in-page").show();
}

function switchToSignUp() {
    $("#sign-in-page").hide();
    $("#sign-up-page").show();
}

function next() {
    $("#first").hide();
    $("#second").show();
}

function signUp() {
    const url = `${baseURL}/auth/register.php`;
    const userData = {
        name: document.getElementById('register-name').value,
        nic: document.getElementById('register-nic').value,
        birthday: document.getElementById('register-birthday').value,
        email: document.getElementById('register-email').value,
        phone_number: document.getElementById('register-phone').value,
        address: document.getElementById('register-address').value,
        husband_name: document.getElementById('register-husband-name').value,
        husband_phone_number: document.getElementById('register-husband-phone').value,
        username: document.getElementById('register-username').value,
        password: document.getElementById('register-password').value
    }

    console.log(userData)
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
        .then(response => response.json())
        .then(data => {
            // Handle the response data here
            console.log(data);
            if (data.success === 0) alert(data.message);
            else
                window.location.reload();
        })
        .catch(error => {
            console.error('Error:', error);
            alert(error)
        });
}

function signIn() {
    const isValid = isValidForm(signInForm);

    if (!isValid) {
        console.log("Form contains errors. Please fill in all required fields.");
    } else {
        console.log("Form data is valid. Performing form submission...");
        const url = `${baseURL}/auth/login.php`;
        const userData = {
            username: document.getElementById('login-username').value,
            password: document.getElementById('login-password').value
        }

        console.log(userData)
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response data here
                console.log(data);
                if (data.success === 1) {
                    localStorage.setItem('token', data.data.token);
                    localStorage.setItem('userId', data.data.id);
                    localStorage.setItem('userRole', data.data.role);
                    localStorage.setItem('userName', data.data.name);
                    window.location.reload();
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert(error)
            });
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
