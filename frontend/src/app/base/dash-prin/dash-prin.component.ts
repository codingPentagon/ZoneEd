import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dash-prin',
  templateUrl: './dash-prin.component.html',
  styleUrls: ['./dash-prin.component.css']
})
export class DashPrinComponent {
  constructor(private route: ActivatedRoute) {
  }

  userID: number = this.route.snapshot.params['userID'];
  classAttendance: any[] = [1,1,1,1,1,1,1];
}
