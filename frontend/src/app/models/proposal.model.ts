export interface Proposal {
  id:number;
  title:String;
  status:String;
  createdDate:Date;
  comment:String;
  feedback:String;
  fileName:String;
  schoolID:number;
  pricipalID:number;
  documents:Document[];
}

interface Document {
  filePath:String;
  fileName:String;
  file:File;
}
