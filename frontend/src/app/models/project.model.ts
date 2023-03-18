export interface Project {
  id:number;
  createdDate:Date;
  title:String;
  proposalID:number;
  startDate:Date;
  endDate:Date;
  responsiblePersonID:number;
  schoolID:number;
  principalID:number;
  milestones:Milestone[];
}

interface Milestone {
  feedback:String;
  dueDate:Date;
  createdDate:Date;
  title:String;
  proofs:Proof[];
}

interface Proof {
  filePath:String;
  fileName:String;
  file:File;

}
