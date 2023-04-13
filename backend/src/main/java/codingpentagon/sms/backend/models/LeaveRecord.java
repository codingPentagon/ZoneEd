package codingpentagon.sms.backend.models;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class LeaveRecord {
    private int id;
    private int leaveRequestID;
    private Date[] dates;
    private String leaveType;
    private int teacherID;
    private int sclID;
}
