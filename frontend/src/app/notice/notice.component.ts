import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Notice} from "../models/notice.model";
import {NoticeService} from "../services/notice.service";
import {Mail} from "../models/mail.model";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent {
  userID:number=1888;
  userRole :string='principal';
  sclID:number=555;
  noticesToDelete : number[]=[];
  categories:any[] = [];
  subject:string = '';
  content:string = '';

  constructor(private noticeService:NoticeService, private userService:UserService) {
    this.userRole == 'zonal' ? this.sclID = 0 : null;
  }

  notices :Notice[] = [];
  ngOnInit(){
    this.userRole != 'admin' ? this.getNotices() : this.getPostedNotices();
    this.getCategories();
  }

//getting the notices from backend
  getNotices(){
    this.noticeService.getNotices(this.userRole,this.sclID).subscribe({
      next:res=>{
        this.notices=res;
      },
      complete:()=>{
        this.getNoticeUsers()
      }
    })
  }

  create:boolean = false;
//toggle the notice creation form
  createToggle(){
    this.create = !this.create;
    if (this.delete){
      this.delete = false;
    }
  }

  delete:boolean = false;
//toggle the checkboxes for deleting notices
  deleteToggle(){
    this.noticesToDelete.splice(0);
    this.delete = !this.delete;
    if (this.create){
      this.create = false;
    }
  }

  noticeBox:string = 'all';
//get posted notices from backend
  getPostedNotices() {
    this.noticeService.getPostedNotices(this.userID).subscribe({
      next:res=>{
        this.notices=res;
      },
      complete:()=>{
        this.getNoticeUsers()
      }
    })
  }
//create notice object and send to backend for saving
  createNotice(newNotice: NgForm) {
    const categories:string[]=this.userRole=='admin' ? ['zonal','principal','teacher','student','parent']:newNotice.value.categories;

    const notice:Notice={
      id:0,
      senderID : this.userID,
      date :new Date(),
      time : "",
      receiverCategories :categories,
      subject : newNotice.value.subject,
      content :newNotice.value.content,
      sclID : this.sclID
    }
    this.noticeService.createNotice(notice).subscribe({
      next:res=>{console.log(res)}
    })
  }

//toggles the IDs of notices which are selected for deleting using checkbox
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
//delete selected notices from database
  deleteNotices(){
    this.noticeService.removeMails(this.noticesToDelete).subscribe({
      complete : () => {
        this.getNoticeUsers();
      }
    });
  }
//fill the categories array with available user categories for the current user role
  getCategories(){
    if (this.userRole == 'zonal'){
      this.categories.push({value:'principal',viewValue:'Principal'})
    }
    if (this.userRole == 'teacher' || this.userRole == 'principal'){
      this.categories.push({value:'parent',viewValue:'Parent'},{value:'student',viewValue:'Student'})
    }
    if (this.userRole == 'principal'){
      this.categories.push({value:'teacher',viewValue:'Teacher'})
    }
  }

  forward(notice: Notice) {
    this.subject = 'Fwd from '+notice.sender?.name+': '+notice.subject;
    this.content = notice.content;
    this.createToggle();
  }

  getNoticeUsers(){
    this.notices.forEach((notice:Notice)=>{
      this.userService.fetchUser(notice.senderID).subscribe({
        next:res=>{
          notice.sender=res;
        }
      })
    })
  }

}
