import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() toggleNotif: EventEmitter<null> = new EventEmitter<null>();
  @Input() notifCount: number = 0;

  constructor() {
  }

  notifToggle() {
    this.toggleNotif.emit();
  }
}
