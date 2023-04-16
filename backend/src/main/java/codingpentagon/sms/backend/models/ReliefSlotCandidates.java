package codingpentagon.sms.backend.models;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ReliefSlotCandidates {
    private int period;
    private String className;
    private List<Teacher> availableTeachers;
    private Teacher allocatedTeacher;
}
