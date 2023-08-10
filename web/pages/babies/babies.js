let babyId = -1;

$(document).ready(function () {
  console.log(getToken)
  if (!getToken) {
      window.location.href = 'index.html';
  }
});

let babiesDataList = [
  {
    id: 0,
    name: '',
    birthday: '',
    gender: '',
    mother: ''
  },
];

generateBabiesTableBody(babiesDataList);
getBabies();

function generateBabiesTableBody(data) {
  const tableBody = document.getElementById("babies-table-body");
  let tableHTML = "";

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
          <span>${item.birthday}</span>
      </td>
      <td style="text-align: center;">
          <span>${item.gender}</span>
      </td>
      <td style="text-align: center;">
          <span>${item.mother.name}</span>
      </td>
      <td style="text-align: center;">
          <ul >
              <li>
                  <div class="drodown">
                      <a class="dropdown-toggle btn btn-icon btn-trigger" data-bs-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                      <div class="dropdown-menu dropdown-menu-end">
                          <ul class="link-list-opt no-bdr">
                              <li btn onclick="viewBaby(${
                                item.id
                              })"><a><em class="icon ni ni-eye"></em><span>View Details</span></a></li>

                              <li btn onclick="babyHeightWeightPageLoad(${
                                item.id
                              })"><a><em class="icon ni ni-eye"></em><span>View Height and Weight</span></a></li>

                              <li btn onclick="babyClinicPageLoad(${
                                item.id
                              })"><a><em class="icon ni ni-eye"></em><span>View Clinic Details</span></a></li>

                              <li btn onclick="babyVaccinePageLoad(${
                                item.id
                              })"><a><em class="icon ni ni-eye"></em><span>View Vaccine Details</span></a></li>

                              <li btn onclick="babyGrowthPageLoad(${
                                item.id
                              })"><a><em class="icon ni ni-eye"></em><span>View Growth Details</span></a></li>

                              <li btn onclick="deleteBaby(${
                                item.id
                              })"><a><em class="icon ni ni-trash"></em><span>Delete Baby</span></a></li>
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

function getBabies(motherId = null) {
  $('#loader').show();
  let url = `${baseURL}/babies/get-babies.php`;
  if (motherId !== null) {
      url += '?mother_id=' + motherId;
  }

  fetch(url)
  .then(response => response.json())
  .then(data => {
      console.log(data);
      if (data.success === 1) {
        babiesDataList = data.babies;
        generateBabiesTableBody(data.babies);
        $('#loader').hide();
    }
  })
  .catch(error => console.error('Error:', error));
}

function deleteBaby(babyId) {
  $('#loader').show();
  let url = `${baseURL}/babies/delete-baby.php`;
  fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ baby_id: babyId }),
  })
  .then(response => response.json())
  .then(data => {
    if (data.success === 1) {
      window.location.reload();
  }
  $('#loader').hide();
  })
  .catch(error => {
    alert('Error:', error)
  $('#loader').hide();
  });
}

function onClickNewBaby() {
  document.getElementById('baby-name').value = '';
  document.getElementById('baby-birthday').value = '';
  document.getElementById('baby-birth-time').value = '';
  document.getElementById('baby-birth-weight').value = '';
  document.getElementById('baby-birth-height').value = '';

  const genderRadio = document.querySelectorAll('input[name="gender"]');
  for (const radio of genderRadio) {
      if (radio.value === 'Male') {
          radio.checked = true;
      } else {
          radio.checked = false;
      }
  }

  document.getElementById('baby-register-date').value = '';
  document.getElementById('baby-moh').value = '';
  document.getElementById('baby-division').value = '';
  document.getElementById('baby-apgar-score').value = '';
  document.getElementById('baby-hospital').value = '';
  document.getElementById('baby-health-division').value = '';
  document.getElementById('baby-mother-nic').value = '';
  document.getElementById('baby-mother-email').value = '';

  enableAllBabyFields();
}

function viewBaby(id) {
  babiesDataList.forEach(item => {
    if(item.id === id) {
      fillFieldsFromData(item);
    }
  });

  disableAllBabyFields();

  $('#createNewBabyPopup').modal('show');
}

function fillFieldsFromData(data) {
  document.getElementById('baby-name').value = data.name || '';
  document.getElementById('baby-birthday').value = data.birthday || '';
  document.getElementById('baby-birth-time').value = data.birth_time || '';
  document.getElementById('baby-birth-weight').value = data.birth_weight || '';
  document.getElementById('baby-birth-height').value = data.birth_height || '';

  const genderRadio = document.querySelectorAll('input[name="gender"]');
  for (const radio of genderRadio) {
      if (radio.value === data.gender) {
          radio.checked = true;
      } else {
          radio.checked = false;
      }
  }

  document.getElementById('baby-register-date').value = data.register_date || '';
  document.getElementById('baby-moh').value = data.moh_division || '';
  document.getElementById('baby-division').value = data.division || '';
  document.getElementById('baby-apgar-score').value = data.apgar_score || '';
  document.getElementById('baby-hospital').value = data.hospital || '';
  document.getElementById('baby-health-division').value = data.health_division || '';
  document.getElementById('baby-mother-nic').value = data.mother.nic || '';
  document.getElementById('baby-mother-email').value = data.mother.email || '';
}


function disableAllBabyFields() {
  const formElements = document.querySelectorAll('.form-control');
  
  formElements.forEach(element => {
      element.setAttribute('disabled', 'true');
  });

  $('#baby-submit-btn').hide();
  $('#get-mother-btns').hide();
}

function enableAllBabyFields() {
  const formElements = document.querySelectorAll('.form-control');
  
  formElements.forEach(element => {
      element.removeAttribute('disabled');
  });

  $('#baby-submit-btn').show();
  $('#get-mother-btns').show();
}



function babyHeightWeightPageLoad(id) {
  babyId = id;
  $('#loader').show();
  setTimeout(() => {
    $('#loader').hide()
  }, 500);
  $("#babies-list").hide();
  $("#single-baby-height-weight").show();
getAllHeightWeight(babyId);
}

function babyClinicPageLoad(id) {
  babyId = id;
    $('#loader').show();
  setTimeout(() => {
    $('#loader').hide()
  }, 500);

  $("#babies-list").hide();
  $("#single-baby-clinic").show();
  getAllClinics(babyId);
}

function babyVaccinePageLoad(id) {
  babyId = id;
    $('#loader').show();
  setTimeout(() => {
    $('#loader').hide()
  }, 500);

  $("#babies-list").hide();
  $("#single-baby-vaccine").show();
  getAllVaccines(babyId);
}

function babyGrowthPageLoad(id) {
  babyId = id;
    $('#loader').show();
  setTimeout(() => {
    $('#loader').hide()
  }, 500);

  $("#babies-list").hide();
  $("#single-baby-growth").show();
  getAllGrowths(babyId);
}

function downloadPdf() {
      $('#loader').show();

      $('#baby-h-w-table').show();
      const element = document.getElementById('baby-h-w-table');
      const opt = {
        margin:       10,
        filename:     'baby_details.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      // Generate the PDF using html2pdf.js
      html2pdf().set(opt).from(element).save();

      setTimeout(() => {
        $('#baby-h-w-table').hide();
        $('#loader').hide();
      }, 1000);
}
