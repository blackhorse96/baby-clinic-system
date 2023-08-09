let editGrowthId = -1;
let selectedBabyId = -1;

let growthDataList = [
  {
    id: -1,
    detail: "",
    age_gap: "",
    month: 0
  },
];

document.addEventListener("DOMContentLoaded", function () {
  if (userRole === 'Mother')
    $('#create-new-growth-btn').hide();
});

function generateBabyGrowthTableBody(data) {
  const tableBody = document.getElementById("baby-growth-table-body");
  let tableHTML = "";

  data?.forEach((item, index) => {
    tableHTML += `
        <tr >
        <td style="text-align: center;">
            <span >${index + 1}</span>
        </td>
        <td style="text-align: center;">
            <span>${item.detail}</span>
        </td>
        <td style="text-align: center;">
            <span>${item.age_gap}</span>
        </td>
        <td style="text-align: center;">
            <span>${item.month || '-'}</span>
        </td>
        <td style="text-align: center;">
            <ul >
                <li>
                    <div class="drodown">
                        <a class="dropdown-toggle btn btn-icon btn-trigger" data-bs-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                        <div class="dropdown-menu dropdown-menu-end">
                            <ul class="link-list-opt no-bdr">
                                <li btn onclick="editBabyGrowth(${item.id
      })"><a><em class="icon ni ni-edit"></em><span>Edit Vaccine</span></a></li>
                                ${userRole !== 'Mother' ? `<li btn onclick="deleteBabyGrowth(${item.id})"><a><em class="icon ni ni-delete"></em><span>Delete</span></a></li>` : ''}
                                
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

generateBabyGrowthTableBody(growthDataList);

function getAllGrowths(babyId) {
  selectedBabyId = babyId;
  $('#loader').show();
  const url = `${baseURL}/babies/growths/get.php${babyId ? `?baby_id=${babyId}` : ''}`;
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response here
      if (data.success === 1) {
        growthDataList = [];
        growthDataList = data.data;
        generateBabyGrowthTableBody(growthDataList);
        // ...
      } else {
        // Handle error response, if needed
        alert('Failed to fetch growth data: ' + data.message);
      }
      $('#loader').hide();
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred while fetching growth data.');
      $('#loader').hide();
    });
}

function editBabyGrowth(growthId) {
  editGrowthId = growthId;

  if (userRole === 'Mother') {
    document.getElementById('baby-growth-detail').disabled = true;
    document.getElementById('baby-growth-age').disabled = true;
  }

  growthDataList.forEach(item => {
    if (item.id == growthId) {
      document.getElementById('baby-growth-detail').value = item.detail;
      document.getElementById('baby-growth-age').value = item.age_gap;
      document.getElementById('baby-growth-month').value = item.month;
    }
  });

  $('#baby-growth-save').hide();
  $('#baby-growth-update').show();

  $('#createNewGrowthPopup').modal('show');
}

function updateGrowthRecord() {
  $('#loader').show();
  const detail = document.getElementById('baby-growth-detail').value;
  const ageGap = document.getElementById('baby-growth-age').value;
  const month = parseInt(document.getElementById('baby-growth-month').value);

  const url = `${baseURL}/babies/growths/update.php`;
  const data = {
    id: editGrowthId,
    detail: detail,
    age_gap: ageGap,
    month: month,
  };

  fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      if (data.success === 1) {
        closeGrowthModal();
        getAllGrowths(selectedBabyId);
      }
      $('#loader').hide();
    })
    .catch(error => {
      console.error('Error:', error);
      $('#loader').hide();
    });
  $('#baby-growth-update').hide();
  $('#baby-growth-save').show();
  clearBabyGrowthForm();
}

function deleteBabyGrowth(growthId) {
  $('#loader').show();
  const url = `${baseURL}/babies/growths/delete.php`;
  const data = { id: growthId };

  fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      growthDataList = growthDataList.filter(record => record.id !== growthId);
      generateBabyGrowthTableBody(growthDataList);
      $('#loader').hide();
    })
    .catch(error => {
      console.error('Error:', error);
      $('#loader').hide();
    });
}

function babyGrowthSubmit() {
  const detail = document.getElementById('baby-growth-detail').value;
  const ageGap = document.getElementById('baby-growth-age').value;
  const completedMonth = parseInt(document.getElementById('baby-growth-month').value);

  createGrowth({
    detail: detail,
    age_gap: ageGap,
    month: completedMonth,
    baby_id: babyId
  });
}

function createGrowth(growthData) {
  $('#loader').show();
  const url = `${baseURL}/babies/growths/create.php`;
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(growthData),
  })
    .then(response => response.json())
    .then(data => {
      if (data.success === 1) {
        const newGrowth = {
          id: data.inserted_id,
          detail: growthData.detail,
          age_gap: growthData.age_gap,
          month: growthData.month || '-',
          baby_id: growthData.baby_id
        };
        growthDataList.push(newGrowth);
        generateBabyGrowthTableBody(growthDataList);
        closeGrowthModal();
        setTimeout(() => {
          $('#loader').hide();
        }, 1000);
      } else {
        // Handle error response, if needed
        alert('Failed to create growth data: ' + response.message);
        $('#loader').hide();
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred while creating growth data.');
      $('#loader').hide();
    });
  clearBabyGrowthForm();
}

function babyGrowthClose() {
  $('#baby-growth-update').hide();
  $('#baby-growth-save').show();
  clearBabyGrowthForm();
}

function closeGrowthModal() {
  $('#createNewGrowthPopup').modal('hide');
  $('#baby-growth-update').hide();
  $('#baby-growth-save').show();
  clearBabyGrowthForm();
}

function clearBabyGrowthForm() {
  document.getElementById('baby-growth-detail').value = '';
  document.getElementById('baby-growth-age').value = '';
  document.getElementById('baby-growth-month').value = null;
}

