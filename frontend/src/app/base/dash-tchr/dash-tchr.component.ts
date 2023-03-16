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

  ngOnInit() {
    console.log(this.userID)
  }
}
