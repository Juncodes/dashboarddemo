//LINE CHART
var ctx = document.getElementById('myLineChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
	labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24'],
    datasets: [{
      label: 'Traffic',
      lineTension: 0,
      pointRadius: 5,
      data: [500, 1000, 750, 1250, 1750, 1250, 1750, 1250, 1750, 2250, 2000, 2250],
      backgroundColor: "rgba(54, 162, 235, 0.2)"
    }]
  },
  options: {
        scales: {
            yAxes: [{
	            ticks: {
                beginAtZero: true,
                fontSize: 15
                }
            }]
        }
    },
    options: {
        scales: {
            xAxes: [{
	            ticks: {
		            beginAtZero: true,
                	fontSize: 20
                }
            }],
            yAxes: [{
	            ticks: {
		        	beginAtZero: true,
					fontSize: 20
	            }
            }]
        }
    },
});

//BAR CHART
var ctx = document.getElementById("myBarChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Mon", "Tues", "Weds", "Thurs", "Fri", "Sat", "Sun"],
        datasets: [{
            label: 'Daily Traffic',
            data: [50, 75, 175, 125, 225, 175, 125],
            backgroundColor: [
                'rgba(54, 162, 235, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(54, 162, 235, 0.4)'
            ],
           borderColor: [
                'rgba(211,211,211,1)',
                'rgba(211,211,211, 1)',
                'rgba(211,211,211, 1)',
                'rgba(211,211,211, 1)',
                'rgba(211,211,211, 1)',
                'rgba(211,211,211, 1)',
                'rgba(211,211,211, 1)'
            ],
            borderWidth: 1 
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                }
            }]
        }
        
    }
});

// PIE CHART
var ctx = document.getElementById("myPieChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{
      backgroundColor: [
        'rgba(54, 162, 235, 0.4)',
        "#3498db",
        "#95a5a6"
      ],
      data: [15, 10, 75]
    }]
  }
});