import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  @Input() links: any[] = [
    {path:'', value:'Dashboard', icon:'space_dashboard'},
    {path:'/relieftchr', value:'Relief Allocations', icon:'schedule'},
    {path:'/reliefprin', value:"Teacher's Relief", icon:'schedule'}
  ];
}
