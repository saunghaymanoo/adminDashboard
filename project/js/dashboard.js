$('.counter-up').counterUp({
    delay: 10,
    time: 1000
});
let dataArr=["jul 21","jul 20","jul 19","jul 18","jul 17","jul 16","jul 15"];
let orderCountArr=[4,6,5,8,4,7,2];
let viewCountArr=[13,12,14,11,16,12,10];

const ov = document.getElementById('ov').getContext('2d');
const ovChart = new Chart(ov, {
    type: 'line',
    data: {
        labels: dataArr,
        datasets: [
            {
            label: 'Order Count',
            data: orderCountArr,
            backgroundColor: [
                '#007bff30',
              
            ],
            borderColor: [
                '#007bff',
               
            ],
            borderWidth: 1,
            tension:0
            },
  
            {
            label: 'Viewer Count',
            data: viewCountArr,
            backgroundColor: [
                '#28874530',
            
            ],
            borderColor: [
                '#288745',
            
            ],
            borderWidth: 1,
            tension:0
            }
        ]
},
    options: {
        scales: {
            yAxes: [{
               display:false,
                ticks: {
                  
                    display: false
                },
                beginAtZero: true
            }],
            xAxes: [{
                   display:false,
                    ticks: {
                      
                        display: false
                    },
                    beginAtZero: true
                }]

        },
        legend: {
            display: true,
          
          position: 'top',
            labels: {
                fontColor: '#333',
                usePointStyle: true,
            }
        }
    }
});

let orderFormPlace=[5,15,4,9,7];
let places=["YGN","MDY","NPY","SHAN","MGW"];

const op = document.getElementById('op').getContext('2d');
const opChart = new Chart(op, {
    type: 'doughnut',
    data: {
        labels: places,
        datasets: [{
            label: '# of Votes',
            data: orderFormPlace,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            display: true,
          
          position: 'bottom',
            labels: {
                fontColor: '#333',
                usePointStyle: true,
            }
        }
    }
    
});



