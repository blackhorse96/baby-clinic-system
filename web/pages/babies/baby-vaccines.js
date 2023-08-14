let editVaccineId = -1;
selectedBabyId = -1;

const VACCINE_STATUS = {
  COMPLETED: 'COMPLETED',
  PENDING: 'PENDING'
}

let vaccineDataList = [
  {
    id: -1,
    age: "",
    vaccine: "",
    date: "",
    status: "",
  },
];

function generateBabyVaccineTableBody(data) {
  const tableBody = document.getElementById("baby-vaccine-table-body");
  let tableHTML = "";

  data?.forEach((item, index) => {
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
                                <li btn onclick="editBabyVaccine(${item.id
      })"><a><em class="icon ni ni-edit"></em><span>Edit Vaccine</span></a></li>
                                <li btn onclick="deleteBabyVaccine(${item.id
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

  const tableBodyPdf = document.getElementById("baby-vaccine-table-body-pdf");
  let tableHTMLPdf = "";
  data?.forEach((item, index) => {
    tableHTMLPdf += `
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
          <span>${item.status}</span>
      </td>
  </tr>
      `;
  });

  tableBodyPdf.innerHTML = tableHTMLPdf;
}

generateBabyVaccineTableBody(vaccineDataList);

function getAllVaccines(babyId) {
  selectedBabyId = babyId;
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


function editBabyVaccine(id) {
  editVaccineId = id;

  vaccineDataList.forEach(item => {
    if (item.id === id) {
      document.getElementById('baby-vaccine-age').value = item.age;
      document.getElementById('baby-vaccine-name').value = item.vaccine;
      document.getElementById('baby-vaccine-date').value = item.date;
      $("#baby-vaccine-status").val(item.status).trigger("change.select2");
    }
  });

  $('#baby-vaccine-save').hide();
  $('#baby-vaccine-update').show();

  $('#createNewVaccinePopup').modal('show');
}

function updateVaccineRecord() {
  $('#loader').show();

  const age = document.getElementById('baby-vaccine-age').value;
  const vaccineName = document.getElementById('baby-vaccine-name').value;
  const date = document.getElementById('baby-vaccine-date').value;
  const status = document.getElementById('baby-vaccine-status').value;

  const requestData = {
    age: age,
    vaccine: vaccineName,
    date: date,
    status: status,
    vaccine_id: editVaccineId
  };

  fetch(`${baseURL}/babies/vaccines/update.php`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  })
    .then(response => response.json())
    .then(data => {
      if (data.success === 1) {
        closeVaccineModal();
        getAllVaccines(selectedBabyId);
      }
      $('#loader').hide();
    })
    .catch(error => {
      console.error('Error:', error);
      $('#loader').hide();
    });
  $('#baby-vaccine-update').hide();
  $('#baby-vaccine-save').show();
  closeVaccineModal();
}

function deleteBabyVaccine(vaccineId) {
  $('#loader').show();
  fetch(`${baseURL}/babies/vaccines/delete.php`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ vaccine_id: vaccineId }),
  })
    .then(response => response.json())
    .then(data => {
      if (data.success === 1) {
        vaccineDataList = vaccineDataList.filter(record => record.id !== vaccineId);
        generateBabyVaccineTableBody(vaccineDataList);
        $('#loader').hide();
      }
      else $('#loader').hide();
    })
    .catch(error => {
      console.error('Error:', error);
      $('#loader').hide();
    });
}

function onClickNewVaccine() {
  clearBabyVaccineForm();
}

function babyVaccineSubmit() {
  $("#vaccine-status").show();
  const age = document.getElementById('baby-vaccine-age').value;
  const vaccineName = document.getElementById('baby-vaccine-name').value;
  const date = document.getElementById('baby-vaccine-date').value;
  const status = document.getElementById('baby-vaccine-status').value;

  // Call the createBabyVaccine function with the extracted data
  createBabyVaccine({
    age: age,
    vaccine: vaccineName,
    date: date,
    status: status,
    baby_id: selectedBabyId
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
          status: vaccineData.status,
        };
        vaccineDataList.push(newItem);
        generateBabyVaccineTableBody(vaccineDataList);
        closeVaccineModal();
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
  clearBabyVaccineForm();
}

function babyVaccineClose() {
  $('#baby-vaccine-update').hide();
  $('#baby-vaccine-save').show();
  clearBabyVaccineForm();
}

function closeVaccineModal() {
  $('#createNewVaccinePopup').modal('hide');
  $('#baby-vaccine-update').hide();
  $('#baby-vaccine-save').show();
  clearBabyVaccineForm();
}

function clearBabyVaccineForm() {
  document.getElementById('baby-vaccine-age').value = '';
  document.getElementById('baby-vaccine-name').value = '';
  document.getElementById('baby-vaccine-date').value = '';
  $("#baby-vaccine-status").val(VACCINE_STATUS.PENDING).trigger("change.select2");
}
