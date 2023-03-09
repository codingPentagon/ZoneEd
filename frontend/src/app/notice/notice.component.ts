import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Notice} from "../models/notice.model";
import {NoticeService} from "../services/notice.service";

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent {
  userID:number=55;
  category :string='teacher';

  categories = [
    {viewValue:"Teachers", value:"teacher"},
    {viewValue:"Parents", value:"parent"},
    {viewValue:"Students", value:"student"}
  ];

  constructor(private noticeService:NoticeService) {
  }

  notices :Notice[] = [];
  ngOnInit(){
    this.getNotices();
  }

  getNotices(){
    this.noticeService.getNotices(this.category).subscribe({
      next:res=>{
        this.notices=res;
      }
    })
  }

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


  getPostedNotices() {
    this.noticeService.getPostedNotices(this.userID).subscribe({
      next:res=>{
        this.notices=res;
      }
    })
  }

  createNotice(newNotice: NgForm) {
    const notice:Notice={
      id:0,
      senderID : this.userID,
      date :new Date(),
      time : "",
      receiverCategories :newNotice.value.categories,
      subject : newNotice.value.subject,
      content :newNotice.value.content,
    }
    this.noticeService.createNotice(notice).subscribe({
      next:res=>{console.log(res)}
    })

  }
}
