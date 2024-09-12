function calculateProgress() {
    const steps = parseInt(document.getElementById('steps').value);
    const ageGroup = document.getElementById('age').value;
    
    const data = {
      '10-18': { steps: [3000, 6000, 9000], kcal: [2000, 2500, 3000] },
      '19-30': { steps: [4000, 7000, 10000], kcal: [2200, 2700, 3200] },
      '31-50': { steps: [3500, 6500, 9500], kcal: [2100, 2600, 3100] },
      '51-60': { steps: [3200, 6200, 9200], kcal: [2000, 2500, 3000] }
    };
    
    const { steps: stepValues, kcal: kcalValues } = data[ageGroup];
    
    const avgSteps = calculateAverage(stepValues);
    const avgKcal = calculateAverage(kcalValues);
    
    document.getElementById('avgSteps').textContent = avgSteps;
    document.getElementById('avgKcal').textContent = avgKcal;
    
    updateGraph(ageGroup);
}

function calculateAverage(array) {
    return array.reduce((acc, val) => acc + val, 0) / array.length;
}

function updateGraph(ageGroup) {
    const data = {
        '10-18': { steps: [3000, 6000, 9000], kcal: [2000, 2500, 3000] },
        '19-30': { steps: [4000, 7000, 10000], kcal: [2200, 2700, 3200] },
        '31-50': { steps: [3500, 6500, 9500], kcal: [2100, 2600, 3100] },
        '51-60': { steps: [3200, 6200, 9200], kcal: [2000, 2500, 3000] }
    };
    
    const labels = ['Week 1', 'Week 2', 'Week 3'];
    const { steps, kcal } = data[ageGroup];
    
    const ctx = document.getElementById('progressChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Steps',
                data: steps,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }, {
                label: 'Calories',
                data: kcal,
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
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

document.addEventListener('DOMContentLoaded', function() {
    var section = document.getElementById('progress');
    section.classList.add('show');
  });
  