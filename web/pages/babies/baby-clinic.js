const CLINIC_STATUS = {
    VISITED: 'VISITED',
    PENDING: 'PENDING'
}

const CLINIC_VISIT_TYPES = {
    BABY_VISIT: 'BABY_VISIT',
    MIDWIFE_VISIT: 'MIDWIFE_VISIT'
}

const clinicDataList = [
    {
        id: 1,
        date: "14/03/2023",
        visit: CLINIC_VISIT_TYPES.BABY_VISIT,
        status: CLINIC_STATUS.PENDING,
    },
    {
        id: 1,
        date: "14/03/2023",
        visit: CLINIC_VISIT_TYPES.BABY_VISIT,
        status: CLINIC_STATUS.VISITED,
    },
    {
        id: 1,
        date: "14/03/2023",
        visit: CLINIC_VISIT_TYPES.MIDWIFE_VISIT,
        status: CLINIC_STATUS.VISITED,
    },
];

function generateBabyClinicTableBody(data) {
    const tableBody = document.getElementById("baby-clinic-table-body");
    let tableHTML = "";

    data.forEach((item, index) => {
        tableHTML += `
        <tr >
        <td style="text-align: center;">
            <span >${index + 1}</span>
        </td>
        <td style="text-align: center;">
            <span>${item.date}</span>
        </td>
        <td style="text-align: center;">
            <span class="${item.visit == CLINIC_VISIT_TYPES.MIDWIFE_VISIT ? 'badge badge-dot bg-warning' : 'badge badge-dot bg-info'}">${item.visit == CLINIC_VISIT_TYPES.BABY_VISIT ? 'Baby Visit' : 'Midwife Visit'}</span>
        </td>
        <td style="text-align: center;">
            <span class="${item.status == CLINIC_STATUS.VISITED ? 'badge badge-dot bg-success' : 'badge badge-dot bg-danger'}">${item.status}</span>
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

function editBabyClinic() {

}

function deleteBabyClinic() { }

function babyClinicSubmit() { }
