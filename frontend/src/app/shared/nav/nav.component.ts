import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private router: Router) {
  }

  @Input() links: any[] = [
    {value:'Dashboard',icon:'space_dashboard',path:'/home',children: null},
    {value:'Header',icon:'person',path:'header',children: null},
    {value:'Reg',icon:'register',path:'/studentreg',children: null},
    {value:'home',icon:'register',path:'/home/header',children:[
        {value:'home',icon:'register',path:'header'},
        {value:'Reg',icon:'register',path:'/studentreg'},
        {value:'Reg',icon:'register',path:'/home/page'}
      ]
    },
  ];

  route(url: string){
    console.log(url)
    this.router.navigateByUrl(url).then(r => {return r});
  }
}
