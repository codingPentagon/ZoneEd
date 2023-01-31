import { Injectable, Output, EventEmitter } from '@angular/core'

@Injectable()
export class CalendarToggleService {

  isOpen:boolean = true;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  toggle() {
    this.change.emit(this.isOpen);
  }

}
