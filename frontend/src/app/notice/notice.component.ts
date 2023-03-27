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
  userRole :string='teacher';
  noticesToDelete : number[]=[];
  categories:any[] = [];

  constructor(private noticeService:NoticeService) {
  }

  notices :Notice[] = [];
  ngOnInit(){
    this.getNotices();
    this.getCategories();
  }

  getNotices(){
    this.noticeService.getNotices(this.userRole).subscribe({
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
    this.noticesToDelete.splice(0);
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
  toggleDeleteItems(noticeID:number) {
    const index=this.noticesToDelete.indexOf(noticeID);
    if (index===-1){
      this.noticesToDelete.push(noticeID);
    }
    else{
      this.noticesToDelete.splice(index,1);
    }
    console.log(this.noticesToDelete);
  }

  deleteNotices(){
    this.noticeService.removeMails(this.noticesToDelete).subscribe({
      complete : () => {
        this.getPostedNotices();
      }
    });
  }

  getCategories(){
    if (this.userRole == 'admin' || this.userRole == 'zonal'){
      this.categories.push({value:'principal',viewValue:'Principal'})
    }
    if (this.userRole == 'admin'){
      this.categories.push({value:'zonal',viewValue:'Zonal Director'})
    }
    if (this.userRole == 'teacher' || this.userRole == 'principal'){
      this.categories.push({value:'parent',viewValue:'Parent'},{value:'student',viewValue:'Student'})
    }
    if (this.userRole == 'principal'){
      this.categories.push({value:'teacher',viewValue:'Teacher'})
    }
  }
}
