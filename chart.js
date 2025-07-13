const ctx = document.getElementById("donasiChart").getContext("2d");
const donasiChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Air Bersih untuk Desa", "Beasiswa Santri"],
    datasets: [
      {
        label: "Total Dana Terkumpul (Rp)",
        data: [42500000, 75000000],
        backgroundColor: ["#28a745", "#007bff"],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return "Rp " + value.toLocaleString("id-ID");
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
