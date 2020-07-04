
      var ctxEarn = document.getElementById('myEarn').getContext('2d');
      var ctxExpense = document.getElementById('myExpense').getContext('2d');
      var ctxCompare = document.getElementById('myChart').getContext('2d');
      var myEarn = new Chart(ctxEarn, {
          type: 'line',
          data: {
              datasets: [
                {
                  data: [200 , 500 , 450 , 750 , 1200 , 1000 , 1500 , 1900 , 2700],
                  backgroundColor: [
                      'rgba(90, 150, 2, 0.2)'
                  ],
                  borderColor: [
                      'rgba(90, 150, 2, 1)'
                  ],
                  borderWidth: 2
                }
              ]
          },
          options: {
              legend: {
                  display: false,
              },
              scales: {
                  yAxes: [{
                      labels: [500, 1000, 1500, 2000, 2500, 5000],
                      ticks: {
                          beginAtZero: true
                      }
                  }],
                  xAxes: [{
                      labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
                      ticks: {
                          beginAtZero: true
                      }
                  }],                  
              }
          }
      });
      var myExpense = new Chart(ctxExpense, {
          type: 'line',
          data: {
              datasets: [{
                    data: [120 , 190 , 300 , 280 , 700 , 1200 , 1000 , 1400 , 2100],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 2
                }
              ]
          },
          options: {
              legend: {
                  display: false,
              },
              scales: {
                  yAxes: [{
                      labels: [500, 1000, 1500, 2000, 2500, 5000],
                      ticks: {
                          beginAtZero: true
                      }
                  }],
                  xAxes: [{
                      labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
                      ticks: {
                          beginAtZero: true
                      }
                  }],                  
              }
          }
      });
      var ctxCompare = new Chart(ctxCompare, {
          type: 'line',
          data: {
              datasets: [
                {
                    label: 'Monthly Earning Line',
                    data: [200 , 500 , 450 , 750 , 1200 , 1000 , 1500 , 1900 , 2700],
                    backgroundColor: [
                        'rgba(90, 150, 2, 0.2)'
                    ],
                    borderColor: [
                        'rgba(90, 150, 2, 1)'
                    ],
                    borderWidth: 2
                },
                {
                    label: 'Monthly Expense Line',
                    data: [120 , 190 , 300 , 280 , 700 , 1200 , 1000 , 1400 , 2100],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 2
                }
              ]
          },
          options: {
              layout: {
                  padding: {
                      left: 10,
                      right: 10,
                      top: 10,
                      bottom: 10
                  }
              },
              tooltips: {
                  mode: 'index'
              },
              legend: {
                  display: true,
                  labels: {
                      fontColor: 'rgb(100, 100, 100)'
                  }
              },
              scales: {
                  yAxes: [{
                      labels: [500, 1000, 1500, 2000, 2500, 5000],
                      ticks: {
                          beginAtZero: true
                      }
                  }],
                  xAxes: [{
                      labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
                      ticks: {
                          beginAtZero: true
                      }
                  }],                  
              }
          }
      });