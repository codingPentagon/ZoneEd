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
  getPostedMails(senderID: number) {
    return this.http.get<Mail[]>(url+'posted/'+senderID.toString());
  }

  getMails(category: string) {
    return this.http.get<Mail[]>(url+category);
  }
}
