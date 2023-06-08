package codingpentagon.sms.backend.models;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class Holiday {
    private int id;
    private Date date;
    private String title;
    private int calendarID;
}

