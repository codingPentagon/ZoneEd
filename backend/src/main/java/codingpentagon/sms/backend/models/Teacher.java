package codingpentagon.sms.backend.models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Teacher {
    private int id;
    private String name;
    private String subject;
    private int sclID;
    private int classID;
}
