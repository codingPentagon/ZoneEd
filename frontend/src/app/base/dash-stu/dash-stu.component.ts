import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dash-stu',
  templateUrl: './dash-stu.component.html',
  styleUrls: ['./dash-stu.component.css']
})
export class DashStuComponent {
  constructor(private route:ActivatedRoute) {
  }

  userID:number=this.route.snapshot.params['userID'];
  assessments :any[]=[1,1]

}
