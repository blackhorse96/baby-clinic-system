const CLINIC_STATUS = {
  VISITED: "VISITED",
  PENDING: "PENDING",
};

const CLINIC_REASON = {
  NORMAL: "NORMAL",
  VACCINATION: "VACCINATION",
};

const CLINIC_VISIT_TYPES = {
  BABY_VISIT: "BABY_VISIT",
  MIDWIFE_VISIT: "MIDWIFE_VISIT",
};

editClinicId = -1;

let clinicDataList = [
  {
    id: 0,
    date: "",
    visit_type: "",
    status: "",
    reason: ""
  },
];

function generateBabyClinicTableBody(data) {
  const tableBody = document.getElementById("baby-clinic-table-body");
  let tableHTML = "";

  data?.forEach((item, index) => {
    tableHTML += `
        <tr >
        <td style="text-align: center;">
            <span >${index + 1}</span>
        </td>
        <td style="text-align: center;">
            <span>${item.date}</span>
        </td>
        <td style="text-align: center;">
            <span class="${item.visit == CLINIC_VISIT_TYPES.MIDWIFE_VISIT
        ? "badge badge-dot bg-warning"
        : "badge badge-dot bg-info"
      }">${item.visit_type == CLINIC_VISIT_TYPES.BABY_VISIT
        ? "Baby Visit"
        : "Midwife Visit"
      }</span>
        </td>
        <td style="text-align: center;">
            <span class="${item.status == CLINIC_STATUS.VISITED
        ? "badge badge-dot bg-success"
        : "badge badge-dot bg-danger"
      }">${item.status}</span>
        </td>
        <td style="text-align: center;">
            <span>${item.reason == CLINIC_REASON.NORMAL
        ? "Normal"
        : "Vaccination"
      }</span>
        </td>
        <td style="text-align: center;">
            <ul >
                <li>
                    <div class="drodown">
                        <a class="dropdown-toggle btn btn-icon btn-trigger" data-bs-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                        <div class="dropdown-menu dropdown-menu-end">
                            <ul class="link-list-opt no-bdr">
                                <li btn onclick="editBabyClinic(${item.id
      })"><a><em class="icon ni ni-edit"></em><span>Edit Vaccine</span></a></li>
                                <li btn onclick="deleteBabyClinic(${item.id
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

generateBabyClinicTableBody(clinicDataList);

function getAllClinics(babyId) {
  selectedBabyId = babyId;

  $('#loader').show();
  const url = `${baseURL}/babies/clinics/get.php${babyId ? `?baby_id=${babyId}` : ''}`;
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => {
      clinicDataList = [];
      clinicDataList = data.data;
      generateBabyClinicTableBody(clinicDataList);
      $('#loader').hide();
    })
    .catch(error => {
      console.error('Error:', error);
      $('#loader').hide();
    });
}


function editBabyClinic(id) {
  editClinicId = id;

  clinicDataList.forEach(item => {
    if (item.id === id) {
      document.getElementById('baby-clinic-date').value = item.date;
      $("#baby-clinic-visit").val(item.visit_type).trigger("change.select2");
      $("#baby-clinic-status").val(item.status).trigger("change.select2");
      $("#baby-clinic-reason").val(item.reason).trigger("change.select2");
    }
  });

  $('#baby-clinic-save').hide();
  $('#baby-clinic-update').show();

  $('#createNewClinicPopup').modal('show');
}

function updateClinicRecord() {
  $('#loader').show();

  const requestData = {
    id: editClinicId,
    date: document.getElementById('baby-clinic-date').value,
    visit_type: document.getElementById('baby-clinic-visit').value,
    status: document.getElementById('baby-clinic-status').value,
    reason: document.getElementById('baby-clinic-reason').value,
  };

  fetch(`${baseURL}/babies/clinics/update.php`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestData)
  })
    .then(response => response.json())
    .then(data => {
      if (data.success === 1) {
        closeClinicModal();
        getAllClinics(selectedBabyId);
        $('#loader').hide();
      } else {
        $('#loader').hide();
      }
    })
    .catch(error => {
      console.error('Error updating clinic record:', error);
      $('#loader').hide();
    });
  $('#baby-clinic-update').hide();
  $('#baby-clinic-save').show();
  closeClinicModal();
}

function deleteBabyClinic(id) {
  $('#loader').show();
  const requestData = {
    id
  };

  fetch(`${baseURL}/babies/clinics/delete.php`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestData)
  })
    .then(response => response.json())
    .then(data => {
      if (data.success === 1) {
        clinicDataList = clinicDataList.filter(record => record.id !== id);
        generateBabyClinicTableBody(clinicDataList);
        $('#loader').hide();
      } else {
        $('#loader').hide();
      }
    })
    .catch(error => {
      console.error('Error deleting clinic record:', error);
      $('#loader').hide();
    });
}

function babyClinicSubmit() {
  createClinic({
    date: document.getElementById('baby-clinic-date').value,
    visit_type: document.getElementById('baby-clinic-visit').value,
    status: document.getElementById('baby-clinic-status').value,
    reason: document.getElementById('baby-clinic-reason').value,
    baby_id: babyId
  });
}

function createClinic(clinicData) {
  $('#loader').show();
  const url = `${baseURL}/babies/clinics/create.php`;
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(clinicData),
  })
    .then(response => response.json())
    .then(data => {
      if (data.success === 1) {
        const newClinic = {
          id: data.inserted_id,
          date: clinicData.date,
          visit_type: clinicData.visitType,
          status: clinicData.status,
          reason: clinicData.reason,
          baby_id: clinicData.baby_id
        };
        clinicDataList.push(newClinic);
        generateBabyClinicTableBody(clinicDataList);
        closeClinicModal();
        $('#loader').hide();
      } else {
        alert('Failed to create clinic data: ' + response.message);
        $('#loader').hide();
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred while creating clinic data.');
      $('#loader').hide();
    });
}

function onClickNewClinic() {
  clearBabyClinicForm();
}

function closeClinicModal() {
  $('#createNewClinicPopup').modal('hide');
  clearBabyClinicForm();
}

function clearBabyClinicForm() {
  document.getElementById('baby-clinic-date').value = '',
    $("#baby-clinic-visit").val(CLINIC_VISIT_TYPES.BABY_VISIT).trigger("change.select2");
  $("#baby-clinic-status").val(CLINIC_STATUS.PENDING).trigger("change.select2");
  $("#baby-clinic-reason").val(CLINIC_REASON.NORMAL).trigger("change.select2");
}
