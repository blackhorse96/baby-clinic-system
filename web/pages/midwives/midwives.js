const midwivesDataList = [
    { id: 1, name: 'Sample Name', nic: '787767748V', phone: '0123456789', email: 'abu@example.com' },
    { id: 2, name: 'Sample Name', nic: '787767748V', phone: '0123456789', email: 'abu@example.com' },
    { id: 3, name: 'Sample Name', nic: '787767748V', phone: '0123456789', email: 'abu@example.com' },
    { id: 6, name: 'Sample Name', nic: '787767748V', phone: '0123456789', email: 'abu@example.com' },
    { id: 6, name: 'Sample Name', nic: '787767748V', phone: '0123456789', email: 'abu@example.com' },
    { id: 6, name: 'Sample Name', nic: '787767748V', phone: '0123456789', email: 'abu@example.com' },
    { id: 6, name: 'Sample Name', nic: '787767748V', phone: '0123456789', email: 'abu@example.com' },
    { id: 6, name: 'Sample Name', nic: '787767748V', phone: '0123456789', email: 'abu@example.com' },
    { id: 6, name: 'Sample Name', nic: '787767748V', phone: '0123456789', email: 'abu@example.com' },
    { id: 6, name: 'Sample Name', nic: '787767748V', phone: '0123456789', email: 'abu@example.com' },
    { id: 6, name: 'Sample Name', nic: '787767748V', phone: '0123456789', email: 'abu@example.com' },
    { id: 6, name: 'Sample Name', nic: '787767748V', phone: '0123456789', email: 'abu@example.com' },
    { id: 6, name: 'Sample Name', nic: '787767748V', phone: '0123456789', email: 'abu@example.com' },
    { id: 6, name: 'Sample Name', nic: '787767748V', phone: '0123456789', email: 'abu@example.com' },
  ];

  function generateMidwivesTableBody(data) {
    const tableBody = document.getElementById('midwives-table-body');
    let tableHTML = '';
  
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
                              <li btn onclick="deleteMidwife(${item.id})"><a><em class="icon ni ni-trash"></em><span>Delete Midwife</span></a></li>
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

  generateMidwivesTableBody(midwivesDataList);
  
  function deleteMidwife(id) {
    console.log('Button clicked for ID:', id);
  }

  function midwifeSubmit() {}
  