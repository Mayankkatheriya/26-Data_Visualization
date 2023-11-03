// const ctx = document.getElementById("myChart");
// Chart.defaults.font.size = 16;
// let myData = {
//   labels: ["January", "February", "March", "April", "May"],
//   datasets: [
//     {
//       label: "Monthly Sales(in lacs)",
//       data: [70, 75, 65, 80, 104],
//       borderWidth: 1,
//       borderColor: "rgb(255, 255, 255)",
//       backgroundColor: "#5ad2ef",
//       barPercentage: 2,
//       barThickness: 80,
//       maxBarThickness: 80,
//       minBarLength: 10,
//     },
//   ],
// };
// new Chart(ctx, {
//   type: "bar",
//   data: myData,
//   options: {
//     scales: {
//       y: {
//         suggestedMin: 0,
//         suggestedMax: 30,
//         beginAtZero: true,
//       },
//       x: {
//         grid: {
//           offset: true,
//         },
//       },
//       responsive: true,
//     //   plugins: {
//     //     title: {
//     //       display: true,
//     //       text: "Monthly Sales Data",
//     //     },
//     //   },
//     },
//   },
// });

// import { Colors } from "chart.js";

// Chart.register(Colors);

let sales = [
  { month: "Jan", sale: 60 },
  { month: "Feb", sale: 70 },
  { month: "Mar", sale: 90 },
  { month: "Apr", sale: 110 },
  { month: "May", sale: 125 },
  { month: "Jun", sale: 85 },
  { month: "Jul", sale: 80 },
  { month: "Aug", sale: 100 },
  { month: "Sep", sale: 115 },
];
//TODO Data fot the chart
const data = {
  labels: sales.map((sale) => sale.month),
  datasets: [
    {
      label: "Mothly Sales(Lacs)",
      borderColor: "rgb(255, 255, 255)",
      backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe", "#ffce56", "#95f0cd"],
      borderWidth: 1,
      data: sales.map((ele) => ele.sale),
    },
  ],
};

//TODO Chart Configurations
let config = {
  type: "bar",
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: false,
        suggestedMin: 20,
        suggestedMax: 30,
        grid: {
            display: false,
        },
      },
    },
    layout: {
      padding: 10,
    },
    plugins: {
      tooltip: {
        events: ["click"],
        callbacks: {
          label: function (context) {
            return `Sales: ${context.parsed.y}`;
          },
          labelColor: function (context) {
            return {
              borderColor: "rgb(145, 200, 55)",
              backgroundColor: "rgb(145, 200, 55)",
              borderWidth: 2,
              borderDash: [2, 2],
              borderRadius: 10,
            };
          },
          labelTextColor: function (context) {
            return "#fff";
          },
        },
      },
    },
    animations: {
      tension: {
        duration: 10000,
        easing: "easeInOutBounce",
        from: 1,
        to: 0,
        loop: true,
      },
    },
  },
};
Chart.defaults.font.size = 16;
Chart.defaults.borderColor = "#aeebff";
Chart.defaults.color = "#aeebff";

//TODO Create the chart
const ctx = document.getElementById("stockChart").getContext("2d");
let myChart = new Chart(ctx, config);

//TODO Moving letter
var textWrapper = document.querySelector(".ml2");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml2 .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i,
  })
  .add({
    targets: ".ml2",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
