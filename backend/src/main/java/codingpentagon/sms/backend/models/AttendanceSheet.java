package codingpentagon.sms.backend.models;

import org.springframework.data.annotation.Id;

import java.util.Date;

public class AttendanceSheet {
    @Id
    private int id;
    private int classID;
    private Date date;
    private AttendanceRecord[] attendanceRecords;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getClassID() {
        return classID;
    }

    public void setClassID(int classID) {
        this.classID = classID;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public AttendanceRecord[] getAttendanceRecords() {
        return attendanceRecords;
    }

    public void setAttendanceRecords(AttendanceRecord[] attendanceRecords) {
        this.attendanceRecords = attendanceRecords;
    }
}

class AttendanceRecord{
    private int studentID;
    private boolean attendance;

    public int getStudentID() {
        return studentID;
    }

    public void setStudentID(int studentID) {
        this.studentID = studentID;
    }

    public boolean getAttendance() {
        return attendance;
    }

    public void setAttendance(boolean attendance) {
        this.attendance = attendance;
    }
}
