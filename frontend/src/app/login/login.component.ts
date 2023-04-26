import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthGuard } from '../auth/auth.guard';
import { Stu } from '../stu';
import { UserRegService } from '../user-reg.service';
import { AuthServicesService } from '../auth/auth-services.service';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  responsedata:any;

  loginform!: FormGroup;
  constructor(private  UserRegService:UserRegService,private builder:FormBuilder,private router:Router,private auth:AuthGuard,private authServices:AuthServicesService){}
  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.loginform=new FormGroup({
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])

    });
    
  }
  proceedlogin(){
   // console.log(this.responsedata.email);
    if(this.loginform.valid){
      this.authServices.proceedlogin(this.loginform.value).subscribe((reult:any)=>{

        if(reult!=null){
          this.responsedata=reult;
          localStorage.setItem('accessToken',this.responsedata.jwtToken);
          alert("login successfully");
          this.router.navigate([''])
        }

       

      
      });
    }
    else
        {
          alert("Please Enter data!");
        }
  }


//   userdata:any;
   stu: Stu=new Stu();

//   loginform=this.builder.group({
//     email:this.builder.control('',Validators.required),
//     password :this.builder.control('',Validators.required),
//   })
  
//   proceedlogin(){
//     console.log(this.loginform.value.email);
//     console.log(this.loginform.value.password);
//     console.log("hi");

//     console.log(this.userdata.email);
//     console.log(this.userdata.password);

   
//     this.UserRegService.setUserData(this.loginform.value.email);
//     this.auth.testUserData(this.loginform.value.email);
//  //   console.log(this.loginform.value.fullName);
//     this.UserRegService.proceedlogin().subscribe((res: any)=>{
//       this.userdata=res;
//     //  console.log(this.userdata.fullName);
//       console.log(this.userdata.password);
      
//       if(this.userdata.email===this.loginform.value.email && this.userdata.password===this.loginform.value.password && this.userdata.role==="student"){
//         console.log("Hi");
//         console.log(this.userdata);
//         if(this.userdata.isactive){
//           sessionStorage.setItem('fullName',this.userdata.fullName);
//           sessionStorage.setItem('password',this.userdata.password);
//           this.router.navigate(['']);
//         }else{
//           console.log('plz contact admin','in active user');
//           this.router.navigate([`dashboard1/${this.loginform.value.email}`]);
//         }
        
//       }else{
//         console.log('Invalid crediatial');
//       }
//     });
    
   
//   }

}
