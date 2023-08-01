const fullDate = new Date();

const dayOfMonth = fullDate.getDate();

const monthIndex = fullDate.getMonth();
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
const month = months[monthIndex];

const babyHeightAndWeightList = [
  { id: 1, date: "07/19/2023", height: 20, weight: 2, baby_id: 1 },
  { id: 2, date: "08/19/2023", height: 25, weight: 3, baby_id: 2 },
  { id: 3, date: "09/19/2023", height: 29, weight: 4, baby_id: 3 },
  { id: 4, date: "10/19/2023", height: 30, weight: 4.5, baby_id: 4 },
  { id: 5, date: "11/19/2023", height: 34, weight: 4.1, baby_id: 5 },
  { id: 6, date: "12/19/2023", height: 36, weight: 4.6, baby_id: 6 },
  { id: 7, date: "01/19/2024", height: 41, weight: 4.9, baby_id: 7 },
  { id: 8, date: "02/19/2024", height: 43, weight: 5.6, baby_id: 9 },
];

function generateBabyHeightWeightTableBody(data) {
  const tableBody = document.getElementById("baby-height-weight-table-body");
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
                              <li btn onclick="editBabyHeightWeight(${
                                item.baby_id
                              })"><a><em class="icon ni ni-edit"></em><span>Edit Details</span></a></li>
                              
                              <li btn onclick="deleteBabyHeightWeight(${
                                item.baby_id
                              })"><a><em class="icon ni ni-delete"></em><span>Edit Details</span></a></li>
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
  data.forEach((item, index) => {
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

function editBabyHeightWeight() {}

function deleteBabyHeightWeight() {}

var heightSelectedYear = new Date("2023");

var heightArray = [];

var tempList = babyHeightAndWeightList.filter(
  (item) =>
    heightSelectedYear.getFullYear() === new Date(item.date).getFullYear()
);
console.log(tempList);

for (let i = 1; i < 13; i++) {
  var height = null;

  tempList.forEach((data) => {
    if (i == new Date(data.date).getMonth()) height = data.height;
  });

  heightArray.push(height);
}

console.log(heightArray);

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

function test2() {
    $('#height-line-chart').hide();
    heightChartOptions = {
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
            name: "High - 2018",
            data: [26, 24, 32, 36, 33, 31, 33, 41, 43, 52, null, null],
          },
        ],
        title: { text: "Average High & Low Temperature", align: "left" },
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
        yaxis: { title: { text: "Temperature" }, min: 5, max: 70 },
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
    $('#height-line-chart').show();
}

var weightChartOptions = {
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
        name: "High - 2018",
        data: [26, 24, 32, 36, 33, 31, 33, 41, 43, 52, null, null],
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
    yaxis: { title: { text: "Weight (Kg)" }, min: 5, max: 70 },
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
  
  weightChart = new ApexCharts(
    document.querySelector("#weight-line-chart"),
    weightChartOptions
  );
weightChart.render();


function babyHeightWeightSubmit() {}