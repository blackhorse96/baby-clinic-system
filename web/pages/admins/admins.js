$(document).ready(function () {
    console.log(getToken)
    if (!getToken) {
        window.location.href = 'index.html';
    }
});

let adminsDataList = [
    { id: '', name: '', nic: '', phone_number: '', email: '' }
];

generateAdminsTableBody(adminsDataList);
getAdmins();

async function getAdmins() {
    $('#loader').show();
    const url = `${baseURL}/admins/get-admins.php`;
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
            adminsDataList = data.admins;
            generateAdminsTableBody(data.admins);
            $('#loader').hide();
        }

    } catch (error) {
        console.error('Error getting admins:', error);
        $('#loader').hide();
        return { success: 0, status: 500, message: 'Internal Server Error' };
    }
}

function generateAdminsTableBody(data) {
    const tableBody = document.getElementById('admins-table-body');
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
                              <li btn onclick="deleteAdmin(${item.id})"><a><em class="icon ni ni-trash"></em><span>Delete Admin</span></a></li>
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

async function deleteAdmin(adminId) {
    $('#loader').show();
    const url = `${baseURL}/admins/delete-admin.php`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Your-Optional-Authentication-Token'
            },
            body: JSON.stringify({ admin_id: adminId })
        });

        const data = await response.json();
        if (data.success === 1) {
            alert('Delete successfully');

            window.location.reload();
        }
        $('#loader').hide();
    } catch (error) {
        console.error('Error deleting admin:', error);
        alert('Error deleting admin:', error);
        $('#loader').hide();
        return { success: 0, status: 500, message: 'Internal Server Error' };
    }
}

// JavaScript function to create an admin
async function createAdmin(adminData) {
    const url = `${baseURL}/admins/create-admin.php`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Your-Optional-Authentication-Token'
            },
            body: JSON.stringify(adminData)
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating admin:', error);
        return { success: 0, status: 500, message: 'Internal Server Error' };
    }
}

// Function to handle form submission and call createAdmin function
function adminSubmit() {
    $('#loader').show();

    // Get form field values
    const name = document.getElementById('admin-name').value;
    const nic = document.getElementById('admin-nic').value;
    const birthday = document.getElementById('admin-birthday').value;
    const phoneNumber = document.getElementById('admin-phone').value;
    const email = document.getElementById('admin-email').value;
    const address = document.getElementById('admin-address').value;
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;

    // Create an object with the form data
    const adminData = {
        name,
        nic,
        birthday,
        phone_number: phoneNumber,
        email,
        address,
        username,
        password
    };

    // Call createAdmin function with adminData
    createAdmin(adminData)
        .then((response) => {
            // Handle the response from the server
            if (response.success === 1) {
                window.location.reload();
                // alert('Admin created successfully!');
            } else {
                alert('Failed to create admin: ' + response.message);
                $('#loader').hide();
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred while creating admin.');
            $('#loader').hide();

        });
}

async function getAdminByUserId(userId) {
    try {
        const response = await fetch(`http://your-api-url/get-admin.php?user_id=${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Your-Optional-Authentication-Token'
            }
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error getting admin by user_id:', error);
        return { success: 0, status: 500, message: 'Internal Server Error' };
    }
}

