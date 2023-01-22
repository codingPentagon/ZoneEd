import { Component } from '@angular/core';

@Component({
  selector: 'app-reg-stu',
  templateUrl: './reg-stu.component.html',
  styleUrls: ['./reg-stu.component.css']
})
export class RegStuComponent {
  navLinks:any[] = [
    {path:'/studentreg', value:'Student Registration', icon:'person_add'}
  ];
}
