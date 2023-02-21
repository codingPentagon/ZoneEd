import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import { Stu } from '../stu';
import { UserRegService } from '../user-reg.service';


@Component({
  selector: 'app-reg-stu',
  templateUrl: './reg-stu.component.html',
  styleUrls: ['./reg-stu.component.css']
})
export class RegStuComponent {

  stu: Stu=new Stu();

  constructor(private  UserRegService:UserRegService){}

  sendStuData() {
    this.UserRegService.sendStuData(this.stu).subscribe(response => {
       
      console.log('Data sent successfully!');
    });
    
     
  }
}
