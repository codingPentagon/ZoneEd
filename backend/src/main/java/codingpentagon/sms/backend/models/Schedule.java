package codingpentagon.sms.backend.models;

import org.springframework.data.annotation.Id;

public class Schedule {
    @Id
    int id;
    int teacherID;
    int year;
    String[][] schedule;
}
