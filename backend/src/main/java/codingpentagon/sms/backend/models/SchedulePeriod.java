package codingpentagon.sms.backend.models;

import lombok.Getter;
import lombok.Setter;

import java.util.Map;

@Getter
@Setter
public class SchedulePeriod {
    private int period;
    private Map<String, String> slotByDay;
}
