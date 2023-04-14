package codingpentagon.sms.backend.models;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class Schedule {
    private int id;
    private int teacherID;
    private List<SchedulePeriod> schedule;
}

@Getter
@Setter
class SchedulePeriod{
    private int period;
    private String mon;
    private String tue;
    private String wed;
    private String thu;
    private String fri;
}

