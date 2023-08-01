var htmlContent = '';

const noticesDataList = [
    { id: 1, title: 'Sample Name', date: '31/07/2023', rich_text: '<p>This is rich text</p>' },
];

function generateNoticesTableBody(data) {
    const tableBody = document.getElementById('notices-table-body');
    let tableHTML = '';

    data.forEach((item, index) => {
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

function deleteNotice(id) {
    console.log('Button clicked for ID:', id);
}

function noticeSubmit() { }


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
                        console.log(htmlContent);
                });
            });
        }
    }

    NioApp.EditorInit = function () {
        NioApp.Quill();
    };

    NioApp.coms.docReady.push(NioApp.EditorInit);

})(NioApp, jQuery);