import { Component } from '@angular/core';

@Component({
  selector: 'app-tchr-profile',
  templateUrl: './tchr-profile.component.html',
  styleUrls: ['./tchr-profile.component.css'],
  
})
export class TchrProfileComponent {
  imageSrc = './assets/ation.png';
  
  changeImage() {    this.imageSrc = 'https://example.com/image2.png';  }
}
