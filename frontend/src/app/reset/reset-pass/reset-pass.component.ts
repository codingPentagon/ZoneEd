import { Component } from '@angular/core';
import { Reset } from 'src/app/reset';

import {FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegService } from 'src/app/user-reg.service';


@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent {

reset: Reset=new Reset();
  email!: string;

constructor(private  UserRegService:UserRegService,private builder:FormBuilder,private router:Router){}


passResetform=this.builder.group({ //formgroup
  //validate reg form data
   
  email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),

   
 });

 sendPassResetData() { //after click submit to reg details implenment this method
   
  if (this.passResetform.valid) {
    console.log("ok");
    this.UserRegService.sendPassResetData(this.email).subscribe(response => {
      console.log('Data sent successfully!');
      console.log(this.passResetform.value);
      // Show success message using an alternative method
      alert('Get reset Successfully.');
      this.router.navigate(['login']);
    });
  }else{
    
  }
  
  
}
}
