document.addEventListener("DOMContentLoaded", function() {
    data = {
      labels: ["Psicologia (40%)", "Imunologia (30%)", "Epidemiologia (20%)", "Outros (5%)"],
      datasets: [{
        data: [40, 30, 20, 5],
        backgroundColor: ["yellow", "#1E90FF", "#32CD32", "#FF4500"],
        hoverOffset: 4
      }]
    };
    
    config = {
      type: 'doughnut',
      data: data,
      options: {
        responsive: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: true
          }
        },
        cutout: '80%'
      }
    };
    
    grafico = new Chart(
      document.querySelector('#grafico'),
      config
    );
  });
  