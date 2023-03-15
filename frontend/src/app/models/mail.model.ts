export interface Mail {
  id : number;
  senderID : number;
  receiverID : number;
  date : Date;
  time : string;
  subject : string;
  content : string;
  attachment : string;
}
export interface Attachment{
  id :number,
  name :string,
  contentType : string,
  file : File
}
