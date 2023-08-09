const CLINIC_STATUS = {
  VISITED: "VISITED",
  PENDING: "PENDING",
};

const CLINIC_VISIT_TYPES = {
  BABY_VISIT: "BABY_VISIT",
  MIDWIFE_VISIT: "MIDWIFE_VISIT",
};

let clinicDataList = [
  {
    id: -1,
    date: "",
    visit: "",
    status: "",
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
            <span class="${
              item.visit == CLINIC_VISIT_TYPES.MIDWIFE_VISIT
                ? "badge badge-dot bg-warning"
                : "badge badge-dot bg-info"
            }">${
      item.visit == CLINIC_VISIT_TYPES.BABY_VISIT
        ? "Baby Visit"
        : "Midwife Visit"
    }</span>
        </td>
        <td style="text-align: center;">
            <span class="${
              item.status == CLINIC_STATUS.VISITED
                ? "badge badge-dot bg-success"
                : "badge badge-dot bg-danger"
            }">${item.status}</span>
        </td>
        <td style="text-align: center;">
            <ul >
                <li>
                    <div class="drodown">
                        <a class="dropdown-toggle btn btn-icon btn-trigger" data-bs-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                        <div class="dropdown-menu dropdown-menu-end">
                            <ul class="link-list-opt no-bdr">
                                <li btn onclick="editBabyClinic(${
                                  item.id
                                })"><a><em class="icon ni ni-edit"></em><span>Edit Vaccine</span></a></li>
                                <li btn onclick="deleteBabyClinic(${
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

generateBabyClinicTableBody(clinicDataList);

function getAllClinics(babyId) {
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
      // Handle the response here
      clinicDataList = data.data;
      generateBabyClinicTableBody(clinicDataList);
      $('#loader').hide();
    })
    .catch(error => {
      console.error('Error:', error);
      $('#loader').hide();
    });
}


function editBabyClinic() {}

function deleteBabyClinic() {}

function babyClinicSubmit() {
  const date = document.getElementById('baby-clinic-date').value;
  const visitType = document.getElementById('baby-clinic-visit').value;
  const status = document.getElementById('baby-clinic-status').value;

  // Call the createClinic function with the extracted data
  createClinic({
    date: date,
    visit_type: visitType,
    status: status,
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
          baby_id: clinicData.baby_id
        };
        clinicDataList.push(newClinic);
        generateBabyClinicTableBody(clinicDataList);
        closeClinicModal();
        setTimeout(() => {
          $('#loader').hide();
        }, 1000);
      } else {
        // Handle error response, if needed
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

function closeClinicModal() {
  $('#createNewClinicPopup').modal('hide');
}

