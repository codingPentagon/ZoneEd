export interface AttendanceSheet {
  id:number;
  classID:number;
  date:Date;
  attendanceRecords:AttendanceRecord[];
}

export interface AttendanceRecord {
  studentID:number;
  attendance:boolean;
}

