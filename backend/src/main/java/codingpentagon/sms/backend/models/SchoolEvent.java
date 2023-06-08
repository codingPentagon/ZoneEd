package codingpentagon.sms.backend.models;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class SchoolEvent {
    private int id;
    private Date[] dates;
    private String title;
    private int calendarID;
    private Date lastUpdated;
}