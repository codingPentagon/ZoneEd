import { Injectable } from '@angular/core';
import {Notification} from "../models/notification.model";
import {HttpClient} from "@angular/common/http";
import {getMessaging,getToken,onMessage} from '@angular/fire/messaging'
import { BehaviorSubject } from 'rxjs'

const url = 'http://localhost:8080/notifications/'


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  message :any=null;

  constructor(private http: HttpClient) {

  }
  ngOnInit(){
    this.requestPermission();
    this.listen();
  }

  private requestPermission() {
    const messaging = getMessaging();
    getToken(messaging,{vapidKey:'BP5k-BYYIzmnZZvCbwWiddeELjekqDkuV8x2OVYS1c_sBVF3jhzaHDIkN4WRrUv1infhRDiFZ9w0rR066nnSP7M'}).then(
      (currentToken)=>{
        if (currentToken){
          console.log("Got token");
        }
        else {
          console.log("No Token");
        }
      }
    );
  }

  private listen() {
    const messaging = getMessaging();
    onMessage(messaging,(payLoad)=>{
      this.message=payLoad;
      console.log(payLoad);
    })
  }


  createNotification(receiverID:number, content:string, event:string){
    const notif :Notification = {
      id : 0,
      receiverID : receiverID,
      date : new Date(),
      time : new Date().getHours().toString()+ new Date().getMinutes().toString(),
      content : content,
      event : event,
      isRead : false,

    }
    return this.http.post(url,notif)
  }

  getNotifications(userID: number) {
    return this.http.get<Notification[]>(url+userID.toString());
  }

  updateNotification(notification:Notification){
    return this.http.put(url,notification);
  }


}

