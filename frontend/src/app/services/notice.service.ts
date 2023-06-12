import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Notice} from "../models/notice.model";

const url = 'http://localhost:8080/notices/'

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  constructor(private http: HttpClient) { }

  createNotice(notice:Notice){

    return this.http.post(url,notice)
  }
  getPostedNotices(userID: number) {
    return this.http.get<Notice[]>(url+'posted/'+userID.toString());
  }

  getNotices(category: string,sclID:number|null) {
    return this.http.get<Notice[]>(url+category+'/'+sclID);
  }

  removeMails(noticesToDelete: number[]) {
    return this.http.delete(url+'posted/'+noticesToDelete.toString())
  }
}
