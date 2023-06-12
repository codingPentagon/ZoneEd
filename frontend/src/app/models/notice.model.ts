
export interface Notice{
  id : number;
  senderID : number;
  receiverCategories : string[];
  date : Date;
  time : string;
  subject : string;
  content : string;
  sclID : number;

  // sender?:User;
}
