export interface LeaveRequest {
  id: number;
  submittedDate:Date;
  leaveType:string;
  teacherID:number;
  reason:string;
  startDate:Date;
  endDate:Date;
  status:string;
}
