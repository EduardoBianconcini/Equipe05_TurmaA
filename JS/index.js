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
  
  // Dados para o gráfico de barras
  const barData = {
    labels: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],  // Dias da semana
    datasets: [{
      label: 'Horas Gastas nas Redes Sociais',
      data: [2, 3, 1, 4, 2.5, 3.5, 2],  // Exemplo de horas por dia
      backgroundColor: '#4B89DC'
    }]
  };

  const barConfig = {
    type: 'bar',
    data: barData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top'
        },
        tooltip: {
          enabled: true
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Horas'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Dias da Semana'
          }
        }
      }
    }
  };

  // Inicializa o gráfico de barras
  const myBarChart = new Chart(
    document.getElementById('myBarChart'),
    barConfig
  );

  
  });
    
