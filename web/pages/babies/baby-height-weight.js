const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let babyHeightAndWeightList = [
  { id: -1, date: "", height: 0, weight: 0, baby_id: -1 },
];

editHeightWeightId = -1;

function generateBabyHeightWeightTableBody(data) {
  const tableBody = document.getElementById("baby-height-weight-table-body");
  let tableHTML = "";

  data?.forEach((item, index) => {
    tableHTML += `
      <tr >
      <td style="text-align: center;">
          <span >${index + 1}</span>
      </td>
      <td style="text-align: center;">
          <span>${item.date}</span>
      </td>
      <td style="text-align: center;">
          <span>${item.height}</span>
      </td>
      <td style="text-align: center;">
          <span>${item.weight}</span>
      </td>
      <td style="text-align: center;">
          <ul >
              <li>
                  <div class="drodown">
                      <a class="dropdown-toggle btn btn-icon btn-trigger" data-bs-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                      <div class="dropdown-menu dropdown-menu-end">
                          <ul class="link-list-opt no-bdr">
                              <li btn onclick="editBabyHeightWeight(${item.id
      })"><a><em class="icon ni ni-edit"></em><span>Edit Details</span></a></li>
                              
                              <li btn onclick="deleteBabyHeightWeight(${item.id
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

  const tableBodyPdf = document.getElementById("baby-height-weight-table-body-pdf");
  let tableHTMLPdf = "";
  data?.forEach((item, index) => {
    tableHTMLPdf += `
      <tr >
      <td style="text-align: center;">
          <span >${index + 1}</span>
      </td>
      <td style="text-align: center;">
          <span>${item.date}</span>
      </td>
      <td style="text-align: center;">
          <span>${item.height}</span>
      </td>
      <td style="text-align: center;">
          <span>${item.weight}</span>
      </td>
  </tr>
      `;
  });

  tableBodyPdf.innerHTML = tableHTMLPdf;
}

generateBabyHeightWeightTableBody(babyHeightAndWeightList);

function getAllHeightWeight(babyId) {
  selectedBabyId = babyId;

  $('#loader').show();
  const url = `${baseURL}/babies/height-weight/get.php${babyId ? `?baby_id=${babyId}` : ''}`;
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => {
      babyHeightAndWeightList = [];
      babyHeightAndWeightList = data.data;
      babyHeightAndWeightList.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });
      generateBabyHeightWeightTableBody(babyHeightAndWeightList);
      heightArray = [];
      resetHightChart();
      loadHeightChart();

      weightArray = [];
      resetWeightChart();
      loadWeightChart();
      $('#loader').hide();
    })
    .catch(error => {
      console.error('Error:', error);
      $('#loader').hide();
    });
}

function editBabyHeightWeight(id) {
  editHeightWeightId = id;

  babyHeightAndWeightList.forEach(item => {
    if (item.id === id) {
      document.getElementById('baby-height-weight-date').value = item.date;
      document.getElementById('baby-height').value = item.height;
      document.getElementById('baby-weight').value = item.weight;
    }
  });

  $('#baby-height-weight-save').hide();
  $('#baby-height-weight-update').show();

  $('#createNewHeightWeightPopup').modal('show');
}

function babyHeightWeightUpdate() {
  $('#loader').show();

  const url = `${baseURL}/babies/height-weight/update.php`;

  const data = {
    date: document.getElementById('baby-height-weight-date').value,
    height: parseFloat(document.getElementById('baby-height').value),
    weight: parseFloat(document.getElementById('baby-weight').value),
    id: editHeightWeightId
  }

  fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      if (data.success === 1) {
        getAllHeightWeight(selectedBabyId)
      }
      $('#loader').hide();
    })
    .catch(error => {
      console.error('Error:', error);
      $('#loader').hide();
    });

  $('#baby-height-weight-save').hide();
  $('#baby-height-weight-update').show();
  closeHeightWeightModal()
}

function deleteBabyHeightWeight(id) {
  $('#loader').show();

  const url = `${baseURL}/babies/height-weight/delete.php`;

  const data = {
    id
  };

  fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      if (data.success === 1) {
        getAllHeightWeight(selectedBabyId);
      } else {
        $('#loader').hide();
      }
    })
    .catch(error => {
      console.error('Error:', error);
      $('#loader').hide();
    });
}

function babyHeightWeightSubmit() {
  const date = document.getElementById('baby-height-weight-date').value;
  const height = parseFloat(document.getElementById('baby-height').value);
  const weight = parseFloat(document.getElementById('baby-weight').value);

  createHeightWeight({
    date: date,
    height: height,
    weight: weight,
    baby_id: babyId
  });
}

function createHeightWeight(heightWeightData) {
  $('#loader').show();
  const url = `${baseURL}/babies/height-weight/create.php`;
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(heightWeightData),
  })
    .then(response => response.json())
    .then(data => {
      if (data.success === 1) {
        const id = data.inserted_id;
        const newItem = {
          id: id,
          date: heightWeightData.date,
          height: heightWeightData.height,
          weight: heightWeightData.weight,
          baby_id: heightWeightData.baby_id
        };
        babyHeightAndWeightList.push(newItem);
        babyHeightAndWeightList.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB - dateA;
        });
        generateBabyHeightWeightTableBody(babyHeightAndWeightList);

        heightArray = [];
        resetHightChart();
        loadHeightChart();

        weightArray = [];
        resetWeightChart();
        loadWeightChart();

        closeHeightWeightModal();
        setTimeout(() => {
          $('#loader').hide();
        }, 1000);

      } else {
        alert('Failed to create data: ' + response.message);
        $('#loader').hide();
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred while creating data.');
      $('#loader').hide();

    });
}

function onClickNewHeightWeight() {
  clearBabyHeightWeightForm();
}

function closeHeightWeightModal() {
  $('#createNewHeightWeightPopup').modal('hide');
  clearBabyHeightWeightForm()
}

function clearBabyHeightWeightForm() {
  document.getElementById('baby-height-weight-date').value = '';
  document.getElementById('baby-height').value = null;
  document.getElementById('baby-weight').value = null;
}

// Height chart

var heightSelectedYear = new Date();
let heightChart;
var heightArray = [];

function loadHeightChart() {
  $('#loader').show();
  var tempList = babyHeightAndWeightList.filter(
    (item) =>
      heightSelectedYear.getFullYear() === new Date(item.date).getFullYear()
  );
  for (let i = 0; i < 12; i++) {
    var height = null;

    tempList.forEach((data) => {
      if (i == new Date(data.date).getMonth()) height = data.height;
    });

    heightArray.push(height);
  }

  // Loading charts
  var heightChartOptions = {
    chart: {
      height: 300,
      type: "line",
      zoom: { enabled: !1 },
      toolbar: { show: !1 },
    },
    colors: ["#3b5de7", "#eeb902"],
    dataLabels: { enabled: !1 },
    stroke: { width: [2, 2], curve: "straight" },
    series: [
      {
        name: "Height (cm)",
        data: [...heightArray],
      },
    ],
    title: { text: "Height", align: "center" },
    grid: {
      row: { colors: ["transparent", "transparent"], opacity: 0.2 },
      borderColor: "#f1f1f1",
    },
    markers: { style: "inverted", size: 4 },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      title: { text: "Month" },
    },
    yaxis: { title: { text: "Height (cm)" }, min: 5, max: 70 },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: !0,
      offsetY: -25,
      offsetX: -5,
    },
    responsive: [
      {
        breakpoint: 600,
        options: { chart: { toolbar: { show: !1 } }, legend: { show: !1 } },
      },
    ],
  },
    heightChart = new ApexCharts(
      document.querySelector("#height-line-chart"),
      heightChartOptions
    );
  heightChart.render();
  $('#loader').hide();
}

function resetHightChart() {
  const parentElement = document.querySelector("#height-line-chart-parent");
  const chartElement = document.querySelector("#height-line-chart");

  if (parentElement && chartElement) {
    parentElement.removeChild(chartElement);

    const newChartElement = document.createElement("div");
    newChartElement.id = "height-line-chart";
    newChartElement.className = "apex-charts";

    newChartElement.style.marginTop = "20px";

    // Append the new chart element back to the parent
    parentElement.appendChild(newChartElement);
  }
}

function heightPrevYear() {
  heightSelectedYear = new Date((heightSelectedYear.getFullYear() - 1).toString());
  const yearSpan = document.getElementById('height-selected-year');
  yearSpan.textContent = heightSelectedYear.getFullYear();
  heightArray = [];
  resetHightChart();
  loadHeightChart();

  setTimeout(() => {
    $('#loader').hide();
  }, 500);
}

function heightNextYear() {
  heightSelectedYear = new Date((heightSelectedYear.getFullYear() + 1).toString());
  const yearSpan = document.getElementById('height-selected-year');
  yearSpan.textContent = heightSelectedYear.getFullYear();
  heightArray = [];
  resetHightChart();
  loadHeightChart();

  setTimeout(() => {
    $('#loader').hide();
  }, 500);
}


// Weight chart

let weightChart;
var weightSelectedYear = new Date();
var weightArray = [];

function loadWeightChart() {
  $('#loader').show();
  var tempList = babyHeightAndWeightList.filter(
    (item) =>
      weightSelectedYear.getFullYear() === new Date(item.date).getFullYear()
  );

  for (let i = 0; i < 12; i++) {
    var weight = null;

    tempList.forEach((data) => {
      if (i === new Date(data.date).getMonth()) weight = data.weight;
    });

    weightArray.push(weight);
  }

  var weightChartOptions = {
    chart: {
      height: 300,
      type: "line",
      zoom: { enabled: !1 },
      toolbar: { show: !1 },
    },
    colors: ["#eeb902"],
    dataLabels: { enabled: !1 },
    stroke: { width: [2], curve: "straight" },
    series: [
      {
        name: "Weight (kg)",
        data: [...weightArray],
      },
    ],
    title: { text: "Weight", align: "center" },
    grid: {
      row: { colors: ["transparent", "transparent"], opacity: 0.2 },
      borderColor: "#f1f1f1",
    },
    markers: { style: "inverted", size: 4 },
    xaxis: {
      categories: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
      ],
      title: { text: "Month" },
    },
    yaxis: { title: { text: "Weight (kg)" }, min: 0, max: 10 },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: !0,
      offsetY: -25,
      offsetX: -5,
    },
    responsive: [
      {
        breakpoint: 600,
        options: { chart: { toolbar: { show: !1 } }, legend: { show: !1 } },
      },
    ],
  };

  weightChart = new ApexCharts(
    document.querySelector("#weight-line-chart"),
    weightChartOptions
  );
  weightChart.render();
  $('#loader').hide();
}

function resetWeightChart() {
  const parentElement = document.querySelector("#weight-line-chart-parent");
  const chartElement = document.querySelector("#weight-line-chart");

  if (parentElement && chartElement) {
    parentElement.removeChild(chartElement);

    const newChartElement = document.createElement("div");
    newChartElement.id = "weight-line-chart";
    newChartElement.className = "apex-charts";
    newChartElement.style.marginTop = "20px";

    parentElement.appendChild(newChartElement);
  }
}

function weightPrevYear() {
  weightSelectedYear = new Date((weightSelectedYear.getFullYear() - 1).toString());
  const yearSpan = document.getElementById('weight-selected-year');
  yearSpan.textContent = weightSelectedYear.getFullYear();
  weightArray = [];
  resetWeightChart();
  loadWeightChart();

  setTimeout(() => {
    $('#loader').hide();
  }, 500);
}

function weightNextYear() {
  weightSelectedYear = new Date((weightSelectedYear.getFullYear() + 1).toString());
  const yearSpan = document.getElementById('weight-selected-year');
  yearSpan.textContent = weightSelectedYear.getFullYear();
  weightArray = [];
  resetWeightChart();
  loadWeightChart();

  setTimeout(() => {
    $('#loader').hide();
  }, 500);
}


