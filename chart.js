var votosCiencia = 100;
var votosAutoAjuda = 60;
var votosRomance = 55;
var votosEconomia = 98;

const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Ciência e Tecnologia', 'Autoajuda', 'Romance', 'Economia'],
      datasets: [{
        label: 'all of Votes',
        data: [votosCiencia, votosAutoAjuda, votosRomance, votosEconomia],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          
          
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
