$(document).ready(function () {
    console.log(getToken)
    if (!getToken) {
        window.location.href = 'index.html';
    }
});

let mothersDataList = [
    { id: '', name: '', nic: '', phone_number: '', email: '' },
];

generateTableBody(mothersDataList);
getMothers();

function generateTableBody(data) {
    const tableBody = document.getElementById('mothers-table-body');
    let tableHTML = '';

    data?.forEach((item, index) => {
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
                              <li btn onclick="deleteMother(${item.id})"><a><em class="icon ni ni-trash"></em><span>Delete Mother</span></a></li>
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

// Function to get all mothers
async function getMothers() {
    $('#loader').show();
    const url = `${baseURL}/mothers/get-mothers.php`;
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
            mothersDataList = data.mothers;
            generateTableBody(data.mothers);
            $('#loader').hide();
        }
    } catch (error) {
        console.error('Error getting mothers:', error);
        $('#loader').hide();
        return { success: 0, status: 500, message: 'Internal Server Error' };
    }
}


// Function to delete a mother by ID
async function deleteMother(motherId) {
    $('#loader').show();
    const url = `${baseURL}/mothers/delete-mother.php`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ mother_id: motherId })
        });

        const data = await response.json();
        if (data.success === 1) {
            alert('Delete successfully');
            window.location.reload();
        }
        $('#loader').hide();
    } catch (error) {
        console.error('Error deleting mother:', error);
        alert('Error deleting mother:', error);
        $('#loader').hide();
        return { success: 0, status: 500, message: 'Internal Server Error' };
    }
}

// Function to create a mother
async function createMother(motherData) {
    try {
        const response = await fetch('http://localhost/baby-clinic-system/api/mothers/create-mother.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(motherData)
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating mother:', error);
        return { success: 0, status: 500, message: 'Internal Server Error' };
    }
}

// Function to get a specific mother by ID
async function getMotherById(motherId) {
    try {
        const response = await fetch(`http://localhost/baby-clinic-system/api/mothers/get-mother.php?mother_id=${motherId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error getting mother:', error);
        return { success: 0, status: 500, message: 'Internal Server Error' };
    }
}

