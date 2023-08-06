const VACCINE_STATUS = {
    COMPLETED: 'COMPLETED',
    PENDING: 'PENDING'
}

const vaccineDataList = [
    {
      id: 1,
      age: "At Birth",
      vaccine: "B.C.G",
      date: "14/03/2023",
      status: VACCINE_STATUS.PENDING,
    },
  ];
  
  function generateBabyVaccineTableBody(data) {
    const tableBody = document.getElementById("baby-vaccine-table-body");
    let tableHTML = "";
  
    data.forEach((item, index) => {
      tableHTML += `
        <tr >
        <td style="text-align: center;">
            <span >${index + 1}</span>
        </td>
        <td style="text-align: center;">
            <span>${item.age}</span>
        </td>
        <td style="text-align: center;">
            <span>${item.vaccine}</span>
        </td>
        <td style="text-align: center;">
            <span>${item.date}</span>
        </td>
        <td style="text-align: center;">
            <span class="${item.status == VACCINE_STATUS.COMPLETED ? 'badge badge-dot bg-success' : 'badge badge-dot bg-danger'}">${item.status}</span>
        </td>
        <td style="text-align: center;">
            <ul >
                <li>
                    <div class="drodown">
                        <a class="dropdown-toggle btn btn-icon btn-trigger" data-bs-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                        <div class="dropdown-menu dropdown-menu-end">
                            <ul class="link-list-opt no-bdr">
                                <li btn onclick="editBabyVaccine(${
                                  item.id
                                })"><a><em class="icon ni ni-edit"></em><span>Edit Vaccine</span></a></li>
                                <li btn onclick="deleteBabyVaccine(${
                                  item.id
                                })"><a><em class="icon ni ni-delete"></em><span>Delete</span></a></li>
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
  
  generateBabyVaccineTableBody(vaccineDataList);

  function getAllVaccines(babyId) {
    $('#loader').show();
    const url = `${baseURL}/babies/vaccines/get.php${babyId ? `?baby_id=${babyId}` : ''}`;
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response here
        vaccineDataList = data.data;
        generateBabyVaccineTableBody(vaccineDataList);
        $('#loader').hide();
      })
      .catch(error => {
        console.error('Error:', error);
        $('#loader').hide();
      });
  }
  

  function editBabyVaccine() {

  }

  function deleteBabyVaccine() {}

  function babyVaccineSubmit() {
    const age = document.getElementById('baby-vaccine-age').value;
  const vaccineName = document.getElementById('baby-vaccine-name').value;
  const date = document.getElementById('baby-vaccine-date').value;
  const status = document.getElementById('baby-vaccine-status').value;

  // Call the createBabyVaccine function with the extracted data
  createBabyVaccine({
    age: age,
    vaccineName: vaccineName,
    date: date,
    status: status,
    baby_id: babyId
  });
  }

  function createBabyVaccine(vaccineData) {
    $('#loader').show();
    const url = `${baseURL}/babies/vaccines/create.php`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vaccineData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success === 1) {
          const id = data.inserted_id;
          const newItem = {
            id: id,
            age: vaccineData.age,
            vaccine: vaccineData.vaccine,
            date: vaccineData.date,
            baby_id: vaccineData.baby_id
          };
          // Assuming there is a babiesVaccinesList array for storing vaccine data
          vaccineDataList.push(newItem);
          generateBabyVaccineTableBody(babiesVaccinesList); // Implement this function to update the vaccine table
          $('#loader').hide();
        } else {
          alert('Failed to create data: ' + response.message);
          $('#loader').hide();
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while creating data.');
        $('#loader').hide();
      });
  }
  