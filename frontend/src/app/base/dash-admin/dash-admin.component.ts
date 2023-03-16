import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dash-admin',
  templateUrl: './dash-admin.component.html',
  styleUrls: ['./dash-admin.component.css']
})
export class DashAdminComponent {
  constructor(private route:ActivatedRoute) {
  }

  userID:number=this.route.snapshot.params['userID'];
}
