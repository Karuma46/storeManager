
var cht = document.getElementById("sales-chart");

var myChart = new Chart(cht, {
    type: 'line',
    data: {
        labels: ["Oct 20", "Oct 21", "Oct 22", "Oct 23", "Oct 24", "Oct 25", "Oct 26"],
        datasets: [{
            label: 'Amount in Ksh',
            data: [14000, 15373, 13000, 15000, 12160, 13356, 14000],
            backgroundColor: ['rgba(0,0,0,0)'],
            borderColor: [
                'rgba(255,99,132,1)',
            ],
            borderWidth: 2,
            
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:false,
                    stepSize: 1000,
                    callback: function(value, index, values){
                      return  ( value / 1000) + 'K';
                    }
                },
                scaleLabel: {
                  display: true,
                  labelString: '(Amount in Ksh)'
                }
            }],
            xAxes: [{
              gridLines: {
                display: false
              },
              scaleLabel: {
                display: true,
                labelString: '(Daily Sales)'
              }
            }]
        },
        legend: {
          display: false
        }

    }
})