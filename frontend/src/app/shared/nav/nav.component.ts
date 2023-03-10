import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Input() links: any[] = [
    {value:'Dashboard',icon:'space_dashboard',path:'/home',children: null},
    {value:'Header',icon:'person',path:'home',children: null},
    {value:'Reg',icon:'check',path:'/studentreg',children: null},
    {value:'home',icon:'book',path:'/home/header',children:[
        {value:'home',icon:'school',path:'header'},
        {value:'Reg',icon:'image',path:'/studentreg'},
        {value:'Reg',icon:'movie',path:'/home/page'}
      ]
    },
  ];

  @Input() name: string = 'Sandeepani';
  @Input() school: string = 'Dehiaththakandiya Maha Vidyalaya';
}
