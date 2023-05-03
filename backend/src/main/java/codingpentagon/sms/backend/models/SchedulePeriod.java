package codingpentagon.sms.backend.models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SchedulePeriod {
    private int period;
    private String mon;
    private String tue;
    private String wed;
    private String thu;
    private String fri;
}

