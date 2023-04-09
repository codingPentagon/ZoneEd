import {FileMetadata} from "./file.model";

export interface Assessment{
  id: number;
  name: string;
  clsID: number;
  sclID:number;
  subjectID: number;
  creatorID: number;
  uploadedDate: Date;
  availableDate: Date;
  documents:FileMetadata[];
}
