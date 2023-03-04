import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import { Stu } from '../stu';
import { UserRegService } from '../user-reg.service';
import {FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService} from 'ngx-toastr'



@Component({
  selector: 'app-reg-stu',
  templateUrl: './reg-stu.component.html',
  styleUrls: ['./reg-stu.component.css']
})
export class RegStuComponent {

  stu: Stu=new Stu();

  constructor(private  UserRegService:UserRegService,private builder:FormBuilder,private router:Router){}

  sturegisterform=this.builder.group({

    indexNo:this.builder.control('',Validators.required),
    fullName:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])),
    initName:this.builder.control('',Validators.required),
    address1:this.builder.control('',Validators.required),
    address2:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.compose([Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
    email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
    gender:this.builder.control('male'),
  //  role:this.builder.control(''),
   // isactive:this.builder.control(false)
  });




  sendStuData() {
    if (this.sturegisterform.valid) {
      this.UserRegService.sendStuData(this.stu).subscribe(response => {
        console.log('Data sent successfully!');
        console.log(this.stu);
        // Show success message using an alternative method
        alert('Registered Successfully. Please contact admin for enable.');
        this.router.navigate(['teacherreg']);
      });
    }else{
      
    }
    
    
  }
  }

