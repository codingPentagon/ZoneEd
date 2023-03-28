export interface Proposal {
  id:number;
  title:String;
  status:String;
  createdDate:Date;
  comment:String;
  feedback:String;
  fileName:String;
  schoolID:number;
  principalID:number;
  documents:File[];
}


