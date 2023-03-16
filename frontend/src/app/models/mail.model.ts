export interface Mail {
  isRead: boolean;
  id : number;
  senderID : number;
  receiverID : number;
  date : Date;
  time : string;
  subject : string;
  content : string;
  attachments : Attachment[];
}

export interface Attachment {
  fileName: string,
  filePath: string,
  file:File
}

