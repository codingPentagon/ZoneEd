import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import { Chart,registerables } from 'node_modules/chart.js';
import {Marksheet} from "../../models/marksheet.model";
Chart.register(...registerables);

@Component({
  selector: 'app-stu-grades-overview',
  templateUrl: './stu-grades-overview.component.html',
  styleUrls: ['./stu-grades-overview.component.css']
})
export class StuGradesOverviewComponent implements OnInit{
  @Input() marksheet!:Marksheet;
  labels: string[] = [];

  ngOnInit(): void {
   this.renderStuGradeOverview();
  }

  ngOnChanges(changes:SimpleChanges): void {
    console.log(changes);
    this.renderStuGradeOverview();
  }

  renderStuGradeOverview(){

    const ctx = document.getElementById('myChart');

    new Chart("piechart", {
      type: 'bar',
      data: {
        labels:this.marksheet.marks.map(mark=>mark.subjectID),
        datasets: [{
          label: 'Subject Marks',
          data: this.marksheet.marks.map(mark=>mark.mark),
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
