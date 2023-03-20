export interface LeaveRequest {
  id: number;
  submitedDate:Date;
  leaveType:string;
  teacherID:number;
  reason:string;
  startDate:Date;
  endDate:Date;
  status:string;
}
