var htmlContent = '';

let noticesDataList = [
    { id: 1, title: '', date: '', content: '' },
];

function generateNoticesTableBody(data) {
    const tableBody = document.getElementById('notices-table-body');
    let tableHTML = '';

    data?.forEach((item, index) => {
        tableHTML += `
      <tr >
      <td style="text-align: center;">
          <span >${index + 1}</span>
      </td>
      <td style="text-align: center;">
          <span>${item.title}</span>
      </td>
      <td style="text-align: center;">
          <span>${item.date}</span>
      </td>
      <td style="text-align: center;">
          <ul >
              <li>
                  <div class="drodown">
                      <a class="dropdown-toggle btn btn-icon btn-trigger" data-bs-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                      <div class="dropdown-menu dropdown-menu-end">
                          <ul class="link-list-opt no-bdr">
                              <li btn onclick="viewNotice(${item.id})"><a><em class="icon ni ni-eye"></em><span>View Notice</span></a></li>

                              <li btn onclick="deleteNotice(${item.id})"><a><em class="icon ni ni-trash"></em><span>Delete Notice</span></a></li>
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

generateNoticesTableBody(noticesDataList);
getAllNotices();

function getAllNotices() {
    $('#loader').show();
    fetch(`${baseURL}/notices/get-notices.php`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data.success === 1) {
                noticesDataList = data.data;
                generateNoticesTableBody(noticesDataList);
            } else {
                console.error('Error getting notices:', data.message);
            }
            $('#loader').hide();
        })
        .catch(error => {
            alert('Error:', error);
            $('#loader').hide();
        });
}

function deleteNotice(id) {
    console.log('Button clicked for ID:', id);
}

function noticeSubmit() {
    const title = document.getElementById('notice-title').value;
    const content = htmlContent;
    const date = new Date().toISOString().split('T')[0];

    createNotice(title, content, date);
}

// Function to create a new notice
function createNotice(title, content, date) {
    $('#loader').show();
    const data = {
        title: title,
        content: content,
        date: date
    };

    fetch(`${baseURL}/notices/create-notice.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            if (data.success === 1) {
                const id = data.inserted_id;
                const newItem = {
                    id: id,
                    date,
                    title,
                    content
                };
                noticesDataList.push(newItem);
                generateNoticesTableBody(noticesDataList);
            } else {
                console.error('Error creating notice:', data.message);
            }
            closeNoticeModal();
            setTimeout(() => {
                $('#loader').hide();
            }, 1000);
        })
        .catch(error => {
            console.error('Error:', error);
            $('#loader').hide();
        });
}

function closeNoticeModal() {
    $('#createNewNoticePopup').modal('hide');
}

function viewNotice(id) {
    let titleHtml = document.getElementById('notice-title');
    const contentHtml = document.getElementById('notice-content');

    noticesDataList.forEach(item => {
        if (id == item.id) {
            titleHtml.innerHTML = `<h5 class="modal-title" id="staticBackdropLabel">ttttttttt</h5>`;
            contentHtml.innerHTML = item.content;
        }
    })
    
    $('#viewNoticePopup').modal('show');
}

// Function to delete a notice by ID
function deleteNotice(id) {
    const data = { id: id };

    fetch(`${baseURL}/notices/delete-notice.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            if (data.success === 1) {
                // Notice deleted successfully, do something with the response data
                console.log('Notice deleted successfully:', data);
            } else {
                // Failed to delete notice, handle the error
                console.error('Error deleting notice:', data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Function to update a notice by ID
function updateNotice(id, title, content, date) {
    const data = {
        id: id,
        title: title,
        content: content,
        date: date
    };

    fetch(`${baseURL}/notices/update-notice.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            if (data.success === 1) {
                // Notice updated successfully, do something with the response data
                console.log('Notice updated successfully:', data);
            } else {
                // Failed to update notice, handle the error
                console.error('Error updating notice:', data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}



!(function (NioApp, $) {
    "use strict";

    NioApp.Quill = function () {

        var _basic = '.quill-basic';
        if ($(_basic).exists()) {
            $(_basic).each(function () {
                var toolbarOptions = [
                    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                    ['blockquote', 'code-block'],

                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
                    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent

                    [{ 'header': [1, 2, 3, 4, 5, 6] }],

                    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                    [{ 'font': [] }],
                    [{ 'align': [] }],

                    ['clean']                                         // remove formatting button
                ];

                var quill = new Quill(this, {
                    modules: {
                        toolbar: toolbarOptions
                    },
                    theme: 'snow'
                });

                var editor = quill;

                editor.on('text-change', function () {
                    htmlContent = editor.root.innerHTML;
                });
            });
        }
    }

    NioApp.EditorInit = function () {
        NioApp.Quill();
    };

    NioApp.coms.docReady.push(NioApp.EditorInit);

})(NioApp, jQuery);