import {Component} from '@angular/core';
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {FormControl, NgForm} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {MatChipInputEvent} from "@angular/material/chips";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {MailService} from "../services/mail.service";
import {Mail} from "../models/mail.model";
import {NgxFileDropEntry} from "ngx-file-drop";

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})

export class MailComponent {
  userID :number =80;


  separatorKeysCodes: number[] = [ENTER, COMMA];
  mailCtrl = new FormControl('');
  filteredMails: Observable<string[]>;
  mails: string[] = [];
  allMails: string[] = ['herathhmtm.20@uom.lk', 'hitihamuhmcn.20@uom.lk', 'pemasirimptbs.20@uom.lk', 'batagallabghm.20@uom.lk', 'dissanayakedml.20@uom.lk'];

  constructor(private mailService:MailService) {//TODO
    this.filteredMails = this.mailCtrl.valueChanges.pipe(
      startWith(null),
      map((mail: string | null) => (mail ? this._filter(mail) : this.allMails.slice())),
    );

  }

  ngOnInit(){
    this.getInboxMails();
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
      }
    })
  }

  createMail(newMail: NgForm) {
    const mail:Mail={
      id:0,
      senderID : this.userID,
      date :new Date(),
      time : "",
      receiverID :newMail.value.receiverID,
      subject : newMail.value.subject,
      content :newMail.value.content,
      attachment : newMail.value.attachment
    }
    this.mailService.createMail(mail).subscribe({
      next:res=>{console.log(res)}
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

  mailBox:string = 'inbox';

  reply(recipient : string) {
    this.createToggle();
    this.mails = [];
    this.mails.push(recipient);
  }

  //File drop module**************

  public files: NgxFileDropEntry[] = [];

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

          /**
           // You could upload it like this:
           const formData = new FormData()
           formData.append('logo', file, relativePath)

           // Headers
           const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

           this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
           .subscribe(data => {
            // Sanitized logo returned from backend
          })
           **/

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event){
    console.log(event);
  }

  public fileLeave(event){
    console.log(event);
  }
}
