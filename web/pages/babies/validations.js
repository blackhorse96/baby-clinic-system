const form = document.querySelector(".form-validates");
let isValidateMother = false;
const babyMotherEmailInput = document.getElementById("baby-mother-email");
const babyMotherNICInput = document.getElementById("baby-mother-nic");
let motherId = -1;

function babySubmit() {

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
        alert("Form contains errors. Please fill in all required fields.");
    } else if (!isValidateMother) {
        alert('Mother not validated');
    }
    else {
        const genderRadios = document.getElementsByName('gender');

        // Function to get the checked value
        function getCheckedValue() {
            for (const radio of genderRadios) {
                if (radio.checked) {
                    return radio.value;
                }
            }
            return null; // Return null if no radio button is checked
        }
        const formData = {
            name: document.getElementById('baby-name').value,
            birthday: document.getElementById('baby-birthday').value,
            birth_time: document.getElementById('baby-birth-time').value,
            birth_weight: parseFloat(document.getElementById('baby-birth-weight').value),
            birth_height: parseFloat(document.getElementById('baby-birth-height').value),
            gender: getCheckedValue(),
            register_date: document.getElementById('baby-register-date').value,
            moh_division: document.getElementById('baby-moh').value,
            division: document.getElementById('baby-division').value,
            apgar_score: parseInt(document.getElementById('baby-apgar-score').value),
            hospital: document.getElementById('baby-hospital').value,
            health_division: document.getElementById('baby-health-division').value,
            mother_id: motherId
        };

        createBaby(formData);
    }
};

async function createBaby(babyData) {
    $('#loader').show();
    const url = `${baseURL}/babies/create-baby.php`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Your-Optional-Authentication-Token'
            },
            body: JSON.stringify(babyData)
        });

        const data = await response.json();
        if (data.success === 1) {
            window.location.reload();
        } else {
            alert('Failed to create baby: ' + response.message);
            $('#loader').hide();
        }
    } catch (error) {
        console.error('Error creating baby:', error);
        $('#loader').hide();
        return { success: 0, status: 500, message: 'Internal Server Error' };
    }
}

function getMother() {
    const motherNIC = document.getElementById('baby-mother-nic').value;
    const url = `${baseURL}/mothers/get-mother-nic.php?nic=${motherNIC}`;
    if (motherNIC !== '') {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.success === 1) {
                    document.getElementById('baby-mother-email').value = data.mother.email;
                    motherId = data.mother.id;
                    babyMotherNICInput.disabled = true;
                    isValidateMother = true;
                } else {
                    document.getElementById('baby-mother-email').value = '';
                    isValidateMother = false;
                    alert('Mother not found.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                isValidateMother = false;
                alert('An error occurred while fetching mother details.');
            });
    } else {
        alert('Please enter a Mother NIC number.');
    }
}

function resetMother() {
    isValidateMother = false;
    babyMotherNICInput.disabled = false;
    babyMotherNICInput.value = '';
    babyMotherEmailInput.value = '';
}