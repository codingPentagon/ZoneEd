import { Component } from '@angular/core';
import { UserRegService } from '../user-reg.service';
import {FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Tchr } from '../tchr';

@Component({
  selector: 'app-reg-tchr',
  templateUrl: './reg-tchr.component.html',
  styleUrls: ['./reg-tchr.component.css']
})
export class RegTchrComponent {
  header="New Teacher Registration";
  tch: Tchr=new Tchr();

  constructor(private  UserRegService:UserRegService,private builder:FormBuilder,private router:Router){}

  tchregisterform=this.builder.group({

    fullName:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])),
   initName:this.builder.control('',Validators.required),
    address1:this.builder.control('',Validators.required),
    address2:this.builder.control('',Validators.required),
    tchDob:this.builder.control('',Validators.required),
    tchContNo:this.builder.control('',Validators.required),
    tchNic:this.builder.control('',Validators.required),
    tchAdmDate:this.builder.control('',Validators.required),
    tchId:this.builder.control('',Validators.required),
    subDetails:this.builder.control('',Validators.required),
    
    
    password:this.builder.control('',Validators.compose([Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
   email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
    tchGender:this.builder.control('male'),
    role:this.builder.control('teacher'),
   // isactive:this.builder.control(true)
  });

  sendTchData() {
    if (this.tchregisterform.valid) {
      this.UserRegService.sendTchData(this.tch).subscribe(response => {
        console.log('Data sent successfully!');
        console.log(this.tchregisterform.value);
        // Show success message using an alternative method
        alert('Registered Successfully. Please contact admin for enable.');
        this.router.navigate(['login']);
      });
    }else{
      
    }
    
    
  }
 
}
