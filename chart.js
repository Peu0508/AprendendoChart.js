const listaVotos = [];
const listaMeses = [];

const areaMeses = document.getElementById('area__mes');
const areaVotos = document.getElementById('area__votos');

const registroBt = document.querySelector('.registrar__voto');
const gerarBt = document.querySelector('.gerar__grafico');

const ctx = document.getElementById('myChart');

registroBt.addEventListener('click',() => {

  listaMeses.push(parseInt(areaMeses.value));
  listaVotos.push(areaVotos.value);

  console.log(listaMeses)
  console.log(listaVotos)

  areaMeses.value = '';
  areaVotos.value = '';
});

function mostrarGrafico(){

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: listaMeses,
      datasets: [{
        label: 'all of Votes',
        data: listaVotos,
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

}


gerarBt.addEventListener('click',mostrarGrafico);

  
