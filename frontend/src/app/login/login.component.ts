import { Component } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService} from 'ngx-toastr'
import { Stu } from '../stu';
import { UserRegService } from '../user-reg.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  fullName = 'admin1';

  constructor(private  UserRegService:UserRegService,private builder:FormBuilder,private router:Router){}
  userdata:any;
  stu: Stu=new Stu();

  loginform=this.builder.group({
    fullName:this.builder.control('',Validators.required),
    password :this.builder.control('',Validators.required),
  })
  
  proceedlogin(){
   
 
    
    //  this.service.Proceedregister(this.loginform.value).subscribe(res=>{
       // this.toastr.success('Please contact admin for enable','Registered Succefully');
      //  this.router.navigate(['login'])
    //  });

   // }else{
    //  this.toastr.warning('plz enter valid data');
    this.UserRegService.proceedlogin().subscribe((res: any)=>{
      //console.log("Hi");
     // console.log(this.loginform.value.fullName);
      //console.log(res);
      this.userdata=res;
      console.log(this.userdata.fullName);
      
      if(this.userdata.fullName===this.loginform.value.fullName){
        console.log("Hi");
        console.log(this.userdata);
        if(this.userdata.isactive){
          sessionStorage.setItem('fullName',this.userdata.fullName);
          sessionStorage.setItem('password',this.userdata.password);
          this.router.navigate(['']);
        }else{
          console.log('plz contact admin','in active user');
          this.router.navigate(['']);
        }
      }else{
        console.log('Invalid crediatial');
      }
    });
    
   
  }

}
