import { Component,OnInit } from '@angular/core';
import { Chart,registerables } from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-tchr-subjects-perf',
  templateUrl: './tchr-subjects-perf.component.html',
  styleUrls: ['./tchr-subjects-perf.component.css']
})
export class TchrSubjectsPerfComponent implements OnInit{
  ngOnInit(): void {
    this.renderTchrSubjectsPerf();
  }

  renderTchrSubjectsPerf(){
    const ctx = document.getElementById('myChart');

    new Chart("piechart", {
      type: 'bar',
      data: {
        labels: ['8A', '8C', '9B', '9D', '10C', '10D','11A'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3,5,6,12,25,9,18],
         // backgroundColor :[

          //  'rgba(255,235,255,0.2)'
         // ],
        
        borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        maintainAspectRatio:false,
       
      }
    });

  }

}
