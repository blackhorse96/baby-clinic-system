const growthDataList = [
    {
        id: 1,
        detail: "Crying",
        age_gap: "1 - 2",
        month: 1
    },
    {
        id: 1,
        detail: "Crying",
        age_gap: "1 - 2",
        month: 1
    },
    {
        id: 1,
        detail: "Crying",
        age_gap: "1 - 2",
        month: 1
    },
];

function generateBabyGrowthTableBody(data) {
    const tableBody = document.getElementById("baby-growth-table-body");
    let tableHTML = "";

    data.forEach((item, index) => {
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
            <span>${item.month}</span>
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

function editBabyGrowth() {

}

function deleteBabyGrowth() { }

function babyGrowthSubmit() { }
