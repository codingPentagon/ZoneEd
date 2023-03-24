import { Component,OnInit } from '@angular/core';
import { Chart,registerables } from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-stu-grades-overview',
  templateUrl: './stu-grades-overview.component.html',
  styleUrls: ['./stu-grades-overview.component.css']
})
export class StuGradesOverviewComponent implements OnInit{
  ngOnInit(): void {
   this.renderStuGradeOverview();
  }

  renderStuGradeOverview(){

    const ctx = document.getElementById('myChart');

    new Chart("piechart", {
      type: 'bar',
      data: {
        labels: ['Sc', 'Mat', 'Eng', 'Sin', 'His', 'Rel','Com','Art','ICT'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3,5,6,12],
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
        }
      }
    });

  }

}
