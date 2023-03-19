import {FileMetadata} from "./file.model";

export interface Mail {
  isRead: boolean;
  id : number;
  senderID : number;
  receiverID : number;
  date : Date;
  time : string;
  subject : string;
  content : string;
  attachments : FileMetadata[];
}


