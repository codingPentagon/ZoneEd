import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dash-tchr',
  templateUrl: './dash-tchr.component.html',
  styleUrls: ['./dash-tchr.component.css']
})
export class DashTchrComponent {

  constructor(private route:ActivatedRoute) {
  }
  userID:number = this.route.snapshot.params['userID'];
  reliefToday:any[] =[1,1,1];
  schedulePeriods:any[] = [1,1,1,1,1,1,1,1];
}
