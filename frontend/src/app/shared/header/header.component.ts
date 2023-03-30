import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    today:string = new Date().toLocaleDateString('en-GB',{year: 'numeric', month: 'long', day: 'numeric'});
}
