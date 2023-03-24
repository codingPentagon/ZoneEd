import { Component,OnInit } from '@angular/core';
import { Chart,registerables } from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-tchr-leave-overview',
  templateUrl: './tchr-leave-overview.component.html',
  styleUrls: ['./tchr-leave-overview.component.css']
})
export class TchrLeaveOverviewComponent implements OnInit{

  Linechart: Chart<"line", number[], string> | undefined;
  
  ngOnInit(): void {
   this.renderTchrLeaveOverview();
  }


  renderTchrLeaveOverview(){


    this.Linechart=new Chart('linechart',{
      type:'line',
      data:{
        labels:['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'],
        datasets:[{
          label:'number of item in month',
          data:[8,6,7,4,5,7,2,7,8,4,9,4],
          fill:false,
          tension:0.1,
          borderColor:"red",
          borderWidth:1,
        },
        {
          label:'number of item in month',
          data:[4,7,3,8,5,3,6,4,2,6,5,4],
          fill:false,
          tension:0.1,
          borderColor:"blue",
          borderWidth:1,
        }
          
         
         
      
      
      ],
        
        
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
