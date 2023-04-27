import {FileMetadata} from "./file.model";

export interface Proposal {
  id:number;
  title:String;
  status:String;
  createdDate:Date;
  comment:String;
  feedback:String;
  schoolID:number;
  documents:FileMetadata[];
}


