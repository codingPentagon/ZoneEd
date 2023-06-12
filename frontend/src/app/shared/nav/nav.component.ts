import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  links = [
    {path: '', value:'Dashboard', icon:'space_dashboard'},
    {path:'/notice', value:'Notice', icon:'notice'},
    {path:'/mail', value:'mail', icon:'mail'},
  ];
}
