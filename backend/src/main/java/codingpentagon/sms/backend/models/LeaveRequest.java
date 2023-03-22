package codingpentagon.sms.backend.models;

import org.springframework.data.annotation.Id;

public class LeaveRequest {
    @Id
    private int id;
    private int submitedDate;
    private String leaveType;
    private int teacherID;
    private String reason;
    private int startDate;
    private int endDate;
    private String status;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getSubmitedDate() {
        return submitedDate;
    }

    public void setSubmitedDate(int submitedDate) {
        this.submitedDate = submitedDate;
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

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public int getStartDate() {
        return startDate;
    }

    public void setStartDate(int startDate) {
        this.startDate = startDate;
    }

    public int getEndDate() {
        return endDate;
    }

    public void setEndDate(int endDate) {
        this.endDate = endDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}


