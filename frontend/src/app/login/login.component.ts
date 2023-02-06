import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   
 

  Username: string;
  Password: string;

  
  constructor() {
    this.Password = '';
    this.Username='';
  }

  ngOnInit(){

  }
  onSubmit() {
    alert(this.Username);
    // Perform the login action
  }
  Show(){
    if(this.Username=='Admin' && this.Password=="1234"){
      alert("hiiiiiii");
    }
  }
}








