package codingpentagon.sms.backend.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ScheduleSlotDetail {
    private int period;
    private String className;
}
