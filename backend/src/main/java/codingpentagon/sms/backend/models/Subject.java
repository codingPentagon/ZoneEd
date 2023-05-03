package codingpentagon.sms.backend.models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Subject {
    private int id;
    private String name;
    private boolean isCompulsory;
    private int classGroupID;
}
