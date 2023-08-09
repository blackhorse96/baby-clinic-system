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
      alert('Delete successfully');

      window.location.reload();
  }
  $('#loader').hide();
  })
  .catch(error => {
    alert('Error:', error)
  $('#loader').hide();
    
  });
}

function viewBaby() {}

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
  // const pdf = new jsPDF();
  //     pdf.setFontSize(18);
  //     pdf.text(20, 20, 'Baby Height and Weight Details');
  //     const table = document.getElementById('baby-h-w-table');
  //     pdf.autoTable({ html: table });
  //     pdf.save('baby_details.pdf');
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
