import {FileMetadata} from "./file.model";

export interface Project {
  id:number;
  createdDate:Date;
  title:string;
  proposalID:number;
  startDate:Date;
  endDate:Date;
  responsiblePerson:string;
  schoolID:number;
  principalID:number;
  milestones:Milestone[];
}

interface Milestone {
  feedback:string;
  dueDate:Date;
  createdDate:Date;
  title:string;
  proofs:FileMetadata[];
}

