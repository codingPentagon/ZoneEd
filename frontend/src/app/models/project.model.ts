export interface Project {
  id:number;
  createdDate:Date;
  title:String;
  proposalID:number;
  startDate:Date;
  endDate:Date;
  responsiblePersonIDs:number;
  schoolID:number;
  principalID:number;
  milestones:Milestone[];
}

interface Milestone {
  feedback:String;
  dueDate:Date;
  createdDate:Date;
  title:String;
  proofs:File[];
}

