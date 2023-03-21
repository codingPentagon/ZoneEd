package codingpentagon.sms.backend.models;

import java.util.Date;

public class LeaveRecord {

    private int id;
    private int leaveRequestID;
    private Date[] dates;
    private String leaveType;
    private int teacherID;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getLeaveRequestID() {
        return leaveRequestID;
    }

    public void setLeaveRequestID(int leaveRequestID) {
        this.leaveRequestID = leaveRequestID;
    }

    public Date[] getDates() {
        return dates;
    }

    public void setDates(Date[] dates) {
        this.dates = dates;
    }

    public String getLeaveType() {
        return leaveType;
    }

    public void setLeaveType(String leaveType) {
        this.leaveType = leaveType;
    }

    public int getTeacherID() {
        return teacherID;
    }

    public void setTeacherID(int teacherID) {
        this.teacherID = teacherID;
    }
}
