import { Component } from '@angular/core';

@Component({
  selector: 'app-tchr-profile',
  templateUrl: './tchr-profile.component.html',
  styleUrls: ['./tchr-profile.component.css'],
  
})
export class TchrProfileComponent {
  showDetails = false;
  buttonText = 'Show Details';
 
  toggleDetails() {

    this.showDetails = !this.showDetails;
    this.buttonText = this.showDetails ? 'Hide Details' : 'Show Details';
  }
}
