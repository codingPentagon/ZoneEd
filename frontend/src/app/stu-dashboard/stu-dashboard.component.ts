import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stu-dashboard',
  templateUrl: './stu-dashboard.component.html',
  styleUrls: ['./stu-dashboard.component.css']
})
export class StuDashboardComponent implements OnInit {

  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
     console.warn('username is',this.route.snapshot.paramMap.get('fullName'));
  }

}
