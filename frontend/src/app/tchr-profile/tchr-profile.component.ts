import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../Service/user-service.service';
import { Stu } from '../User/stu';



@Component({
  selector: 'app-tchr-profile',
  templateUrl: './tchr-profile.component.html',
  styleUrls: ['./tchr-profile.component.css'],
  
})
export class TchrProfileComponent implements OnInit {
  stu: Stu=new Stu();




constructor(private userservice:UserServiceService,private router:Router){}

  ngOnInit(): void {
    this.getUser();
  }
  imageSrc = '';

  changeImage(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.imageSrc = e.target.result;
    };

    reader.readAsDataURL(file);
  }
  saveImage() {
    // Save the image to your desired location
    // ...
  }

  oldPassword = '';
  newPassword = '';
  confirmPassword = '';

  changePassword() {
    // Validate the passwords
    if (this.newPassword !== this.confirmPassword) {
      alert('The new passwords do not match');
      return;
    }

    // Send the change password request to the server
    // ...
  }
  
  private getUser(){
    this.userservice.getUserDeatils().subscribe(data => {
      console.log(data);
      this.stu = data;
    });
  }

  
}
