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
    {
      id: 1,
      age: "At Birth",
      vaccine: "B.C.G",
      date: "14/03/2023",
      status: VACCINE_STATUS.COMPLETED,
    },
    {
      id: 1,
      age: "At Birth",
      vaccine: "B.C.G",
      date: "14/03/2023",
      status: VACCINE_STATUS.COMPLETED,
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

  function editBabyVaccine() {

  }

  function deleteBabyVaccine() {}

  function babyVaccineSubmit() {}
  