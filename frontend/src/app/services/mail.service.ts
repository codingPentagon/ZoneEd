import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Mail} from "../models/mail.model";

const url = 'http://localhost:8080/mails/'

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  createMail(mail:Mail){
    return this.http.post(url,mail)
  }
  getSentBoxMails(senderID: number) {
    return this.http.get<Mail[]>(url+'sentbox/'+senderID.toString());
  }

  getInboxMails(receiverID: number) {
    return this.http.get<Mail[]>(url+'inbox/'+receiverID.toString());
  }

  patchAsRead(mailID: number) {
    return this.http.patch(url, mailID);
  }

  removeMails(mailsToDelete: number[]) {
    return this.http.delete(url+mailsToDelete.toString());
  }
}
