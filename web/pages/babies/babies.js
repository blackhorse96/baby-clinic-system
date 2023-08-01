const babiesDataList = [
  {
    id: 1,
    name: "Sample Name",
    nic: "14/03/2023",
    phone: "Male",
    email: "Mother Name",
  },
  {
    id: 1,
    name: "Sample Name",
    nic: "14/03/2023",
    phone: "Male",
    email: "Mother Name",
  },
  {
    id: 1,
    name: "Sample Name",
    nic: "14/03/2023",
    phone: "Male",
    email: "Mother Name",
  },
  {
    id: 1,
    name: "Sample Name",
    nic: "14/03/2023",
    phone: "Male",
    email: "Mother Name",
  },
  {
    id: 1,
    name: "Sample Name",
    nic: "14/03/2023",
    phone: "Male",
    email: "Mother Name",
  },
  {
    id: 1,
    name: "Sample Name",
    nic: "14/03/2023",
    phone: "Male",
    email: "Mother Name",
  },
  {
    id: 1,
    name: "Sample Name",
    nic: "14/03/2023",
    phone: "Male",
    email: "Mother Name",
  },
  {
    id: 1,
    name: "Sample Name",
    nic: "14/03/2023",
    phone: "Male",
    email: "Mother Name",
  },
];

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
          <span>${item.nic}</span>
      </td>
      <td style="text-align: center;">
          <span>${item.phone}</span>
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

generateBabiesTableBody(babiesDataList);

function viewBaby() {}

function babyHeightWeightPageLoad(id) {
    console.log("Button clicked for ID:", id);
  $('#loader').show();
  setTimeout(() => {
    $('#loader').hide()
  }, 500);
  $("#babies-list").hide();
  $("#single-baby-height-weight").show();
}

function babyClinicPageLoad() {
    $('#loader').show();
  setTimeout(() => {
    $('#loader').hide()
  }, 500);

  $("#babies-list").hide();
  $("#single-baby-clinic").show();
}

function babyVaccinePageLoad(id) {
    $('#loader').show();
  setTimeout(() => {
    $('#loader').hide()
  }, 500);

  $("#babies-list").hide();
  $("#single-baby-vaccine").show();
}

function babyGrowthPageLoad(id) {
    $('#loader').show();
  setTimeout(() => {
    $('#loader').hide()
  }, 500);

  $("#babies-list").hide();
  $("#single-baby-growth").show();
}

function createNewBaby() {
    console.log(4444444444)
}
