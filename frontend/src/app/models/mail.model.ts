export interface Mail {
  id : number;
  senderID : number;
  receiverID : string;
  date : Date;
  time : string;
  subject : string;
  content : string;
  attachment : string;
}
