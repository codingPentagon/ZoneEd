import {Component} from '@angular/core';
import {FormControl, NgForm} from "@angular/forms";
import {NgxFileDropEntry} from "ngx-file-drop";

import {MailService} from "../services/mail.service";
import { Mail} from "../models/mail.model";
import { FileMetadata} from "../models/file.model";
import {FilesService} from "../services/files.service";
import {User} from "../models/user.model";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})

export class MailComponent {
  userID :number =2860;
  sclID:number=555;
  userRole:string = 'student';
  categories : any[] = [];
  users:User[]=[];

  fileDir = '/mail/attachments/';
  attachments : FileMetadata[]=this.filesService.filesMetadata;
  selectedCategory: string='';

  constructor(private mailService:MailService,private filesService:FilesService,private userService:UserService) {
  }

  ngOnInit(){
    this.getInboxMails();
    this.getCategories();
    this.getUsers();
  }
//get users from backend
  getUsers(){
    this.userService.fetchUsers(this.sclID).subscribe({
      next:res=>{
        this.users = res;
      }
    })
  }

  inboxmails: Mail[] = [];
  sentboxmails: Mail[] = [];
  mailsToDelete: Mail[] = [];

  getInboxMails(){
    this.mailService.getInboxMails(this.userID).subscribe({
      next:res=>{
        this.inboxmails=res;
      }
    })
  }
  getSentBoxMails(){
    this.mailService.getSentBoxMails(this.userID).subscribe({
      next:res=>{
        this.sentboxmails=res;
        console.log(res)
      }
    })
  }

  createMail(newMail: NgForm) {
    const mail:Mail={
      isRead: false,
      id:0,
      senderID : this.userID,
      date :new Date(),
      time : "",
      receiverID :newMail.value.receiverID,
      subject : newMail.value.subject,
      content :newMail.value.content,
      attachments : this.attachments
    }

    console.log(mail);
    this.mailService.createMail(mail).subscribe({
      next:res=>{console.log(res)}
    })
  }
  updateAsRead(mailID: number){
    this.mailService.patchAsRead(mailID).subscribe({
      complete:()=>{
        this.getInboxMails();
      }
    })
  }

  create:boolean = false;

  createToggle(){
    this.create = !this.create;
    if (this.delete){
      this.delete = false;
    };
    this.getInboxMails();
    this.getSentBoxMails();
  }

  delete:boolean = false;

  deleteToggle(){
    this.delete = !this.delete;
    if (this.create){
      this.create = false;
    }
  }

  mailBox:string = 'inbox';

  reply(recipientID: number) {
    this.createToggle();
  }

  //File drop module
  droppedFiles: NgxFileDropEntry[] = [];

  public dropped(droppedFiles: NgxFileDropEntry[]) {
    console.log(droppedFiles)
    this.droppedFiles.push(...droppedFiles);
    for (const droppedFile of droppedFiles) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          // Here you can access the real file
          this.createAttachment(file);
          console.log(this.attachments)
        });
      }
      else {
        // It was a directory (empty directories are added, otherwise only attachments)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event:any){
    console.log(event);
  }

  public fileLeave(event:any){
    console.log(event);
  }

  createAttachment(file: File) {
    this.filesService.addFile(this.fileDir,file).then(()=>{
      this.filesService.fetchDownloadLinks();
    });
    this.attachments=this.filesService.filesMetadata
  }

  deleteAttachment(attachment: FileMetadata){
    this.filesService.removeFile(attachment);
    this.attachments=this.filesService.filesMetadata;
  }

  deleteAllAttachments(){
    this.filesService.removeAllFiles();
  }

  getCategories(){
    if (this.userRole == 'zonal' || this.userRole == 'principal' || this.userRole == 'teacher' || this.userRole == 'student' || this.userRole == 'parent'){
      this.categories.push({viewValue:"Teacher", value:"teacher"})
    }
    if (this.userRole == 'zonal' || this.userRole == 'admin' || this.userRole == 'teacher' || this.userRole == 'student' || this.userRole == 'parent'){
      this.categories.push({viewValue:"Principal", value:"principal"})
    }
    if (this.userRole == 'principal' || this.userRole == 'admin' || this.userRole == 'teacher'){
      this.categories.push({viewValue:"Zonal Director", value:"zonal"})
    }
    if (this.userRole == 'principal' || this.userRole == 'zonal'){
      this.categories.push({viewValue:"Admin", value:"admin"})
    }
    if (this.userRole == 'principal' || this.userRole == 'teacher'){
      this.categories.push({viewValue:"Parent", value:"parent"},{viewValue:"Student", value:"student"})
    }
  }

  toggleDeleteItems(mail:Mail) {
    const index=this.mailsToDelete.indexOf(mail);
    if (index===-1){
      this.mailsToDelete.push(mail);
    }
    else{
      this.mailsToDelete.splice(index,1);
    }
    console.log(this.mailsToDelete);
  }

  deleteMails(){
    const mailIDs:number[]=[];
    this.mailsToDelete?.forEach(mail=>{
      mailIDs.push(mail.id);
      if (mail.attachments){
        this.filesService.filesMetadata=mail.attachments;
        this.filesService.removeAllFiles();
      }
    });
    this.mailService.removeMails(mailIDs).subscribe({
      complete : () => {
        this.getInboxMails();
        this.getSentBoxMails();
      }
    });
  }
}
