import { Component } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent {
  categories = [
    {viewValue:"Teachers", value:"teacher"},
    {viewValue:"Parents", value:"parent"},
    {viewValue:"Students", value:"student"}
  ];
}
