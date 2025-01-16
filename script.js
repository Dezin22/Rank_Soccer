// Lista de times com seus respectivos valores de elencos por estado
const teams = [
    { name: 'Palmeiras', value: 1200, state: 'SP' },
    { name: 'Flamengo', value: 895, state: 'RJ' },
    { name: 'Corinthians', value: 620, state: 'SP' },
    { name: 'Fluminense', value: 600, state: 'RJ' },
    { name: 'Internacional', value: 545, state: 'RS' },
    { name: 'São Paulo', value: 495, state: 'SP' },
    { name: 'Atlético-MG', value: 483, state: 'MG' },
    { name: 'Grêmio', value: 422, state: 'RS' },
    { name: 'RB Bragantino', value: 395, state: 'SP' },
    { name: 'Botafogo', value: 388, state: 'RJ' },
    { name: 'Vasco', value: 380, state: 'RJ' },
    { name: 'Athletico-PR', value: 375, state: 'PR' },
    { name: 'Cruzeiro', value: 350, state: 'MG' },
    { name: 'Bahia', value: 323, state: 'BA' },
    { name: 'Fortaleza', value: 207, state: 'CE' },
    { name: 'Cuiabá', value: 145, state: 'MT' },
    { name: 'Vitória', value: 137, state: 'BA' },
    { name: 'Atlético-GO', value: 123, state: 'GO' },
    { name: 'Juventude', value: 87, state: 'RS' },
    { name: 'Criciúma', value: 80, state: 'SC' }
];

// Distribuir os times entre 3 colunas
const columnCount = 3;
const columns = [document.getElementById('ranking-list-1'), document.getElementById('ranking-list-2'), document.getElementById('ranking-list-3')];

teams.forEach((team, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${team.name} - R$ ${team.value} milhões`;
    
    // Determina em qual coluna adicionar o time
    const columnIndex = index % columnCount;
    columns[columnIndex].appendChild(listItem);
});

// Preparar os dados para o gráfico
const states = ['RJ', 'SP', 'RS', 'MG', 'PR', 'BA', 'CE', 'MT', 'GO', 'SC'];
const stateValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Somar os valores dos elencos por estado
teams.forEach(team => {
    const stateIndex = states.indexOf(team.state);
    stateValues[stateIndex] += team.value;
});

// Criar gráfico usando Chart.js
const ctx = document.getElementById('teamValueChart').getContext('2d');
const teamValueChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: states,
        datasets: [{
            label: 'Valor dos Elencos por Estado (em milhões)',
            data: stateValues,
            backgroundColor: '#4CAF50',
            borderColor: '#388E3C',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 100
                }
            }
        }
    }
});
