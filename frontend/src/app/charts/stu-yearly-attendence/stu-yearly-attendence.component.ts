import { Component,OnInit } from '@angular/core';
import { Chart,registerables } from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-stu-yearly-attendence',
  templateUrl: './stu-yearly-attendence.component.html',
  styleUrls: ['./stu-yearly-attendence.component.css']
})
export class StuYearlyAttendenceComponent implements OnInit {
  ngOnInit(): void {
    this.renderStuYearlyAttendanceChart();

  }

  renderStuYearlyAttendanceChart(){
    const ctx = document.getElementById('myChart');

    new Chart("piechart", {
      type: 'bar',
      data: {
        labels: ['Jan', 'feb', 'mar', 'apr', 'may', 'june','july','aug','sep','oct','nov','dec'],
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
        }
      }
    });


  }

}
