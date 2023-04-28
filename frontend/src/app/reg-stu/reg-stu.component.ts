import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import { Stu } from '../stu';
import { UserRegService } from '../user-reg.service';
import {FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-reg-stu',
  templateUrl: './reg-stu.component.html',
  styleUrls: ['./reg-stu.component.css']
})
export class RegStuComponent {

  stu: Stu=new Stu(); //student object

  constructor(private  UserRegService:UserRegService,private builder:FormBuilder,private router:Router){} //inject services and routes

 sturegisterform=this.builder.group({ //formgroup
   //validate reg form data
    fullName:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])), 
    initName:this.builder.control('',Validators.required),
    address1:this.builder.control('',Validators.required),
    address2:this.builder.control('',Validators.required),
    indexNo:this.builder.control('',Validators.required),
    dob:this.builder.control('',Validators.required),
    
    password:this.builder.control('asAS12!@3'),//Validators.compose([Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
    email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
    gender:this.builder.control(''),
    stuClass:this.builder.control('',Validators.required),
    admDate:this.builder.control('',Validators.required),
    fatherName1:this.builder.control('',Validators.required),
    faddress1:this.builder.control('',Validators.required),
    faddress2:this.builder.control('',Validators.required),
    faNic:this.builder.control('',Validators.required),
    faOccupation:this.builder.control('',Validators.required),
    faContNo:this.builder.control('',Validators.required),
    role:this.builder.control('student'),
    isactive:this.builder.control(true)
  });
 



  sendStuData() { //after click submit to reg details implenment this method
    if (this.sturegisterform.valid) {
      this.UserRegService.sendStuData(this.stu).subscribe(response => {
        console.log('Data sent successfully!');
        console.log(this.sturegisterform.value);
        // Show success message using an alternative method
        alert('Registered Successfully.');
        this.router.navigate(['login']);
      });
    }else{
      
    }
    
    
  }
  }

