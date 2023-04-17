package codingpentagon.sms.backend.models;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class ReliefRecord {
    private int id;
    private String className;
    private int period;
    private int allocatedTeacherID;
    private Date date;
    private String reliefSubject;
    private int sclID;
}
