import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dash-zonal',
  templateUrl: './dash-zonal.component.html',
  styleUrls: ['./dash-zonal.component.css']
})
export class DashZonalComponent {

  constructor(private route:ActivatedRoute) {
  }

  userID:number=this.route.snapshot.params['userID'];
  pendingProposals: any[]=[1,1,1,1];
}
