import {Component} from '@angular/core';
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {FormControl, NgForm} from "@angular/forms";
import { map, Observable, startWith} from "rxjs";
import {MatChipInputEvent} from "@angular/material/chips";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {MailService} from "../services/mail.service";
import { Mail} from "../models/mail.model";
import {NgxFileDropEntry} from "ngx-file-drop";
import { FileMetadata} from "../models/file.model";
import {FilesService} from "../services/files.service";

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})

export class MailComponent {
  userID :number =80;
  sclID:number=555;
  userRole:string = 'student';

  categories : any[] = [];

  separatorKeysCodes: number[] = [ENTER, COMMA];
  mailCtrl = new FormControl('');
  filteredMails: Observable<string[]>;
  mails: string[] = [];
  allMails: string[] = ['herathhmtm.20@uom.lk', 'hitihamuhmcn.20@uom.lk', 'pemasirimptbs.20@uom.lk', 'batagallabghm.20@uom.lk', 'dissanayakedml.20@uom.lk'];
  fileDir = '/mail/attachments/';
  attachments : FileMetadata[]=this.filesService.filesMetadata;
  selectedCategory: string='';



  constructor(private mailService:MailService,private filesService:FilesService) {//TODO
    this.filteredMails = this.mailCtrl.valueChanges.pipe(
      startWith(null),
      map((mail: string | null) => (mail ? this._filter(mail) : this.allMails.slice())),
    );
  }



  ngOnInit(){
    this.getInboxMails();
    this.getCategories();
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our mail
    if (value) {
      this.mails.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
    this.mailCtrl.setValue(null);
  }

  remove(mail: string): void {
    const index = this.mails.indexOf(mail);

    if (index >= 0) {
      this.mails.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.mails.push(event.option.viewValue);
    // @ts-ignore
    this.mailInput.nativeElement.value = '';
    this.mailCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allMails.filter(mail => mail.toLowerCase().includes(filterValue));
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
      receiverID :newMail.value.receiverIDm,
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
    this.mails = [];
    //TODO:fetch name by user ID
    this.mails.push(recipientID.toString());
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

  }

  deleteAttachment(attachment: FileMetadata){
    this.filesService.removeFile(attachment);
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

  users : {name:string,id:number}[]=[];
  getUsers(){
    switch (this.selectedCategory) {
      // case 'teacher' : this.teachersService.fetchTeachers(this.sclID).subscribe({next:res=>{this.users=res}});break;
      // case 'principal' : this.principalsService.fetchPrincipals(this.sclID).subscribe({next:res=>{this.users=res}});break;
      // case 'zonal' : this.zonalsService.fetchZonals(this.sclID).subscribe({next:res=>{this.users=res}});break;
      // case 'admin' : this.adminsService.fetchAdmins(this.sclID).subscribe({next:res=>{this.users=res}});break;
      // case 'parent' : this.parentService.fetchParents(this.sclID).subscribe({next:res=>{this.users=res}});break;
      // case 'student' : this.studentsService.fetchStudents(this.sclID).subscribe({next:res=>{this.users=res}});break;
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
    this.mailsToDelete.forEach(mail=>{
      mailIDs.push(mail.id);
      this.filesService.filesMetadata=mail.attachments;
      this.filesService.removeAllFiles();
    })
    this.mailService.removeMails(mailIDs).subscribe({
      complete : () => {
        this.getInboxMails();
        this.getSentBoxMails();
      }
    })
  }

}
