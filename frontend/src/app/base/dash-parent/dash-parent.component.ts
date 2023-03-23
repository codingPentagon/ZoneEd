import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dash-parent',
  templateUrl: './dash-parent.component.html',
  styleUrls: ['./dash-parent.component.css']
})
export class DashParentComponent {
  constructor(private route:ActivatedRoute) {
  }

  userID:number=this.route.snapshot.params['userID'];
  children:any[] =[1]
}
