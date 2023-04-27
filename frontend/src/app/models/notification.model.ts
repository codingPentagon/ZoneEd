export interface Notification {
  id : number;
  receiverID : number;
  date : Date;
  time : string;
  content : string;
  event : string;
  isRead : boolean;
}

export interface NotificationToken{
  userID : number;
  token : string;
  id : number;
}
