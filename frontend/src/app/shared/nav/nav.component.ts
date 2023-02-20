import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  @Input() links: any[] = [
    {path:'', value:'Dashboard', icon:'space_dashboard'},
    {path:'/assessmenttchr', value:'Student Assessments', icon:'schedule'},
    {path:'/assessmentstu', value:'Assessments', icon:'schedule'}
  ];
}
