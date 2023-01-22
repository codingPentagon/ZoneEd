import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {RegStuService} from "./reg-stu.service";

@Component({
  selector: 'app-reg-stu',
  templateUrl: './reg-stu.component.html',
  styleUrls: ['./reg-stu.component.css']
})
export class RegStuComponent {
  navLinks:any[] = [
    {path: '/', value: 'Dashboard', icon:'space_dashboard'},
    {path: '/studentreg', value: 'Student Registration', icon:'person_add'}
  ]
  gender:any;
  maxDate = new Date(2018,1,1);
  maxDate2 = new Date();

  constructor(public rs:RegStuService) {}
  addUser(form:NgForm,event:Event){
    if(!form.valid){
      event.preventDefault();
    }
    else {
      const user = {
        fullName: form.value.fullName,
        initName: form.value.initName,
        dob: form.value.dob,
        address1: form.value.address1,
        address2: form.value.address2,
        faddress1: form.value.faddress1,
        faddress2: form.value.faddress2,
        email: form.value.email,
        indexNo: form.value.indexNo,
        stuClass: form.value.stuClass,
        datee: form.value.datee,
        fatherName1: form.value.fatherName1,
        occupation: form.value.occupation,
        contNo: form.value.contNo,
        fatherNIC: form.value.nic,
        gender: this.gender
      }
      console.log(user);
      this.rs.save(user);
      alert("Registration Successful");
      form.resetForm();
    }
  }
}
