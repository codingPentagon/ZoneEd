export interface Marksheet {
  id:number;
  classID:number;
  studentID:number;
  totalMarks:number;
  year:number;
  term:number;
  rank:number;
  isCompleted:boolean;
  marks:SubjectMark[]
}

interface SubjectMark {
  subjectID:number;
  mark:number | null;
}
