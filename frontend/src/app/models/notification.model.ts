export interface Notification {
  id : number;
  receiverID : number;
  date : Date;
  content : string;
  event : string;
  isRead : boolean;
}

export interface NotificationToken{
  userID : number;
  tokens : string[];
  id : number;
}

export interface NotificationMsg{
  event : string;
  content : string;
}
