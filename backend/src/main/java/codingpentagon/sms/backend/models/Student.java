package codingpentagon.sms.backend.models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Student {
    private int id;
    private String name;
    private int classID;
    private int[] takenSubjectIDs;
}
