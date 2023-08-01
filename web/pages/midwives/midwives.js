$(document).ready(function () {
    console.log(getToken)
    if (!getToken) {
        window.location.href = 'index.html';
    }
});

let midwivesDataList = [
    { id: '', name: '', nic: '', phone_number: '', email: '' },
];

function generateMidwivesTableBody(data) {
    const tableBody = document.getElementById('midwives-table-body');
    let tableHTML = '';

    data.forEach((item, index) => {
        tableHTML += `
      <tr >
      <td style="text-align: center;">
          <span >${index + 1}</span>
      </td>
      <td style="text-align: center;">
          <span>${item.name}</span>
      </td>
      <td style="text-align: center;">
          <span>${item.nic}</span>
      </td>
      <td style="text-align: center;">
          <span>${item.phone_number}</span>
      </td>
      <td style="text-align: center;">
          <span>${item.email}</span>
      </td>
      <td style="text-align: center;">
          <ul >
              <li>
                  <div class="drodown">
                      <a class="dropdown-toggle btn btn-icon btn-trigger" data-bs-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                      <div class="dropdown-menu dropdown-menu-end">
                          <ul class="link-list-opt no-bdr">
                              <li btn onclick="deleteMidwife(${item.id})"><a><em class="icon ni ni-trash"></em><span>Delete Midwife</span></a></li>
                          </ul>
                      </div>
                  </div>
              </li>
          </ul>
      </td>
  </tr>
      `;
    });

    tableBody.innerHTML = tableHTML;
}

generateMidwivesTableBody(midwivesDataList);
getMidwives();

// Function to get all midwives
async function getMidwives() {
    $('#loader').show();
    const url = `${baseURL}/midwives/get-midwives.php`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Your-Optional-Authentication-Token'
            }
        });

        if (response) {
            const data = await response.json();
            midwivesDataList = data.midwives;
            generateMidwivesTableBody(data.midwives);
            $('#loader').hide();
        }
    } catch (error) {
        console.error('Error getting midwives:', error);
        $('#loader').hide();
        return { success: 0, status: 500, message: 'Internal Server Error' };
    }
}

// Function to delete a midwife by ID
async function deleteMidwife(midwifeId) {
    $('#loader').show();
    const url = `${baseURL}/midwives/delete-midwife.php`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Your-Optional-Authentication-Token'
            },
            body: JSON.stringify({ midwife_id: midwifeId })
        });

        const data = await response.json();
        console.log(data);
        if (data.success === 1) {
            alert('Delete successfully');

            window.location.reload();
        }
        $('#loader').hide();

    } catch (error) {
        console.error('Error deleting midwife:', error);
        alert('Error deleting midwife:', error);
        $('#loader').hide();
        return { success: 0, status: 500, message: 'Internal Server Error' };
    }
}


function midwifeSubmit() {
    $('#loader').show();

    // Get form field values
    const name = document.getElementById('midwife-name').value;
    const nic = document.getElementById('midwife-nic').value;
    const birthday = document.getElementById('midwife-birthday').value;
    const phoneNumber = document.getElementById('midwife-phone').value;
    const email = document.getElementById('midwife-email').value;
    const hospital = document.getElementById('midwife-email').value;
    const address = document.getElementById('midwife-address').value;
    const username = document.getElementById('midwife-username').value;
    const password = document.getElementById('midwife-password').value;

    // Create an object with the form data
    const midwifeData = {
        name,
        nic,
        birthday,
        phone_number: phoneNumber,
        email,
        hospital,
        address,
        username,
        password
    };

    // Call create midwife function with midwifeData
    createMidwife(midwifeData)
        .then((response) => {
            // Handle the response from the server
            if (response.success === 1) {
                window.location.reload();
                // alert('Midwife created successfully!');
            } else {
                alert('Failed to create midwife: ' + response.message);
                $('#loader').hide();
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred while creating midwife.');
            $('#loader').hide();

        });
}

// Function to create a midwife
async function createMidwife(midwifeData) {
    const url = `${baseURL}/midwives/create-midwife.php`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Your-Optional-Authentication-Token'
            },
            body: JSON.stringify(midwifeData)
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating midwife:', error);
        return { success: 0, status: 500, message: 'Internal Server Error' };
    }
}

// Function to get a specific midwife by ID
async function getMidwifeById(midwifeId) {
    try {
        const response = await fetch(`http://localhost/baby-clinic-system/api/midwives/get-midwife.php?midwife_id=${midwifeId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Your-Optional-Authentication-Token'
            }
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error getting midwife:', error);
        return { success: 0, status: 500, message: 'Internal Server Error' };
    }
}


