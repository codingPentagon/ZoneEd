import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {NgxFileDropEntry} from "ngx-file-drop";

import {MailService} from "../services/mail.service";
import { Mail} from "../models/mail.model";
import { FileMetadata} from "../models/file.model";
import {FilesService} from "../services/files.service";
import {UserService} from "../services/user.service";
import {User} from "../models/user.model";

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})

export class MailComponent {
  userID :number =4240;
  sclID:number=555;
  userRole:string = 'zonal';
  users:User[] = [];
  recepientIDs :number[] = [];
  subject :string='';

  fileDir = '/mail/attachments/';
  attachments : FileMetadata[]=this.filesService.filesMetadata;
  selectedType: string='';
  userTypes: string[] = [];

  inboxmails: Mail[] = [];
  sentboxmails: Mail[] = [];
  mailsToDelete: Mail[] = [];

  classes: any = [{id:1,name:'6A'},{id:2,name:'8A'}];
  selectedCls!: number;
  schools: any = [{id:555,name:'Poramadulla'},{id:200,name:'Padiyapelella'}];
  selectedScl: number = 0;

  constructor(private mailService:MailService,private filesService:FilesService,private userService:UserService) {
    this.getUserTypes();
  }

  ngOnInit(){
    this.getMails(true);
  }

  getUserTypes(){
    switch (this.userRole.toLowerCase()) {
      case 'admin':
        this.userTypes.push('zonal','principal');
        break;
      case 'zonal':
        this.userTypes.push('principal','teacher','admin');
        break;
      case 'principal':
        this.userTypes.push('zonal','teacher','student','parent','admin');
        break;
      case 'teacher':
        this.userTypes.push('principal','student','parent','zonal');
        break;
      case 'student' || 'parent':
        this.userTypes.push('principal','teacher');
        break;
    }
  }


  //get users from backend
  getUsersByTypeOnRole(){
    const sclCheck = this.userRole=='zonal' && this.selectedType=='teacher' && this.selectedScl==undefined;
    const clsCheck = this.selectedType=='student' || this.selectedType=='parent' && this.selectedCls==undefined;

    const sclID = this.userRole=='admin' || this.userRole=='zonal' ? this.selectedScl : this.sclID;
    const clsID = this.selectedCls==undefined ? 0 : this.selectedCls;

    if (!sclCheck && !clsCheck){
      this.userService.fetchUsersByTypeOnRole(sclID, this.userRole, this.selectedType, clsID).subscribe({
        next: res => {
          this.users = res;
          console.log(res);
        }
      })
    }
    else {
      this.users.splice(0);
    }
  }

  getMails(isInbox:boolean){
    if (isInbox){
      this.mailService.getInboxMails(this.userID).subscribe({
        next:res=>{
          this.inboxmails=res;
          this.getMailUsers(isInbox);
        }
      })
    }
    else {
      this.mailService.getSentBoxMails(this.userID).subscribe({
        next:res=>{
          this.sentboxmails=res;
          this.getMailUsers(isInbox);
        }
      })
    }
  }

  getMailUsers(isInbox:boolean){
    const mails = isInbox ? this.inboxmails : this.sentboxmails;
    mails.forEach((mail:Mail)=>{
      this.userService.fetchUser(isInbox ? mail.senderID : mail.receiverID).subscribe({
        next:res=>{
          isInbox ? mail.sender=res : mail.receiver=res;
        }
      })
    })
  }

  createMail(newMail: NgForm) {
    const mail:Mail={
      isRead: false,
      id:0,
      senderID : this.userID,
      date :new Date(),
      time : "",
      receiverID :0,
      subject : newMail.value.subject,
      content :newMail.value.content,
      attachments : this.attachments
    }

    newMail.value.recipients.forEach((recipient:number)=>{
      mail.receiverID=recipient;
      this.mailService.createMail(mail).subscribe();
    });
    this.getMails(false);
  }
  updateAsRead(mailID: number){
    this.mailService.patchAsRead(mailID).subscribe()
  }

  create:boolean = false;

  createToggle(){
    this.create = !this.create;
    if (this.delete){
      this.delete = false;
    }
    this.getMails(true);
    this.getMails(false);
  }

  delete:boolean = false;

  deleteToggle(){
    this.delete = !this.delete;
    if (this.create){
      this.create = false;
    }
  }

  mailBox:string = 'inbox';

  reply(mail:Mail) {
    this.selectedType = mail.sender!.role;
    this.selectedScl = mail.sender!.sclID;
    this.selectedCls = mail.sender!.clsID;
    this.users = [mail.sender!];
    this.recepientIDs.push(mail.senderID);
    this.subject = 'Re: '+mail.subject;
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


  toggleDeleteItems(mail:Mail) {
    const index=this.mailsToDelete.indexOf(mail);
    if (index===-1){
      this.mailsToDelete.push(mail);
    }
    else{
      this.mailsToDelete.splice(index,1);
    }
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
        this.getMails(true);
        this.getMails(false);
      }
    });
  }
}
