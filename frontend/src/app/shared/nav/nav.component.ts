import {Component, Input} from '@angular/core';
import {NavLinkSet} from "../../models/nav-link.model";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Input() linksSet: NavLinkSet[] = []
  @Input() name: string = 'Sandeepani';
  @Input() school: string = 'Dehiaththakandiya Maha Vidyalaya';
}
