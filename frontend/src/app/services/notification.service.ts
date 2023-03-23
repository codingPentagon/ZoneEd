import {Injectable, OnInit} from '@angular/core';
import {Notification} from "../models/notification.model";
import {HttpClient} from "@angular/common/http";
import {AngularFireMessaging} from "@angular/fire/compat/messaging";



const url = 'http://localhost:8080/notifications/'


@Injectable({
  providedIn: 'root'
})
export class NotificationService implements OnInit{

  constructor(private http: HttpClient, private fireMessaging: AngularFireMessaging) {

  }

  ngOnInit(){
    this.requestPermission();
    this.listen();
  }

  requestPermission(){
    this.fireMessaging.requestToken.subscribe({
      next:(token)=>{
        console.log("Permission granted!");
        console.log(token);
      },
      error:(error)=>{console.error(error);}
    })
  }


  listen(){
    this.fireMessaging.messages.subscribe({
      next:message=>{
        console.log(message);
      }
    });
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

