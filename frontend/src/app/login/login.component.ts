import { Component } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthGuard } from '../auth/auth.guard';
import { Stu } from '../stu';
import { UserRegService } from '../user-reg.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private  UserRegService:UserRegService,private builder:FormBuilder,private router:Router,private auth:AuthGuard){}
  userdata:any;
  stu: Stu=new Stu();

  loginform=this.builder.group({
    email:this.builder.control('',Validators.required),
    password :this.builder.control('',Validators.required),
  })
  
  proceedlogin(){
    
   
    this.UserRegService.setUserData(this.loginform.value.email);
    this.auth.testUserData(this.loginform.value.email);
 //   console.log(this.loginform.value.fullName);
    this.UserRegService.proceedlogin().subscribe((res: any)=>{
      this.userdata=res;
    //  console.log(this.userdata.fullName);
      console.log(this.userdata.password);
      
      if(this.userdata.email===this.loginform.value.email && this.userdata.password===this.loginform.value.password && this.userdata.role==="student"){
        console.log("Hi");
        console.log(this.userdata);
        if(this.userdata.isactive){
          sessionStorage.setItem('fullName',this.userdata.fullName);
          sessionStorage.setItem('password',this.userdata.password);
          this.router.navigate(['']);
        }else{
          console.log('plz contact admin','in active user');
          this.router.navigate([`dashboard1/${this.loginform.value.email}`]);
        }
        
      }else{
        console.log('Invalid crediatial');
      }
    });
    
   
  }

}
