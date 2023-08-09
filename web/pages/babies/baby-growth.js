let growthDataList = [
    {
        id: -1,
        detail: "",
        age_gap: "",
        month: 0
    },
];

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
                                <li btn onclick="deleteBabyGrowth(${item.id
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

generateBabyGrowthTableBody(growthDataList);

function getAllGrowths(babyId) {
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
  

function editBabyGrowth() {

}

function deleteBabyGrowth() { }

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
  }

  function closeGrowthModal() {
    $('#createNewGrowthPopup').modal('hide');
  }
  
