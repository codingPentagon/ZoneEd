import {Time} from "@angular/common";

export interface Notification {
  id : number;
  receiverID : number;
  date : Date;
  time : string;
  content : string;
  event : string;
  isRead : boolean;
}
