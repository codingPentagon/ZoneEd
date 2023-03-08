import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  @Input() links: any[] = [
    {value:'Dashboard',icon:'space_dashboard',path:'/home'},
    {value:'Header',icon:'header',path:'header'},
    {value:'Reg',icon:'register',path:'/studentreg'},
  ];
}
