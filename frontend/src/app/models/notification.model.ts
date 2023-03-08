import {Time} from "@angular/common";

export interface Notification {
  id : number;
  receiverID : number;
  date : Date;
  time : Time;
  content : string;
  event : string;
  isRead : boolean;
}
