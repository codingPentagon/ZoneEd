import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  @Input() links: any[] = [
    {value:'Dashboard',icon:'space_dashboard',path:'/home',children: null},
    {value:'Header',icon:'header',path:'header',children: null},
    {value:'Reg',icon:'register',path:'/studentreg',children: null},
    {value:'Reg',icon:'register',path:'/studentreg',children:[
        {value:'Reg',icon:'register',path:'/studentreg'},
        {value:'Reg',icon:'register',path:'/studentreg'},
        {value:'Reg',icon:'register',path:'/studentreg'}
      ]
    },
  ];

}
