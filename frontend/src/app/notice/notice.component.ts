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

  notices = [
    {sender:"Mr. R.T. Meetiyagoda (Principal)",date:"31 December 2022", subject:"About the sport meet", content:"It will be held on next month", time:"15 min ago"},
    {sender:"Mrs. A. Rathnayake (Zonal Director)",date:"26 December 2022", subject:"About the sport meet", content:"It will be held on next month", time:"1 day ago"},
    {sender:"Mr. R.T. Meetiyagoda (Principal)",date:"31 December 2022", subject:"About the sport meet", content:"It will be held on next month", time:"15 min ago"},
    {sender:"Mrs. A. Rathnayake (Zonal Director)",date:"26 December 2022", subject:"About the sport meet", content:"It will be held on next month", time:"1 day ago"},
    {sender:"Mr. R.T. Meetiyagoda (Principal)",date:"31 December 2022", subject:"About the sport meet", content:"It will be held on next month", time:"15 min ago"},
    {sender:"Mrs. A. Rathnayake (Zonal Director)",date:"26 December 2022", subject:"About the sport meet", content:"It will be held on next month", time:"1 day ago"}
  ];

  create:boolean = false;

  createToggle(){
    this.create = !this.create;
    if (this.delete){
      this.delete = false;
    }
  }

  delete:boolean = false;

  deleteToggle(){
    this.delete = !this.delete;
    if (this.create){
      this.create = false;
    }
  }

  noticeBox:string = 'all';
}
