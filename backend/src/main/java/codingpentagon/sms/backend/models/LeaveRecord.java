package codingpentagon.sms.backend.models;

public class LeaveRecord {

    private int id;
    private int leaveRequestID;
    private int dates;
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

    public int getDates() {
        return dates;
    }

    public void setDates(int dates) {
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
