import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  links: any[] = [
    {value:'Dashboard',icon:'space_dashboard',path:'/home',children: null},
    {value:'My Profile',icon:'person',path:'home',children: null},
    {value:'Mails',icon:'mail',path:'/studentreg',children: null},
    {value:'Reports',icon:'report',path:'/home/header',children:null}
  ];

  @Input() navLinks:any[] = [];
  @Input() name: string = 'Sandeepani';
  @Input() school: string = 'Dehiaththakandiya Maha Vidyalaya';

  ngOnInit() {
    this.links.splice(1,0,...this.navLinks);
  }
}
