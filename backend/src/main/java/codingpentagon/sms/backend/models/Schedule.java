package codingpentagon.sms.backend.models;

import org.springframework.data.annotation.Id;

import java.util.List;

public class Schedule {
    @Id
    private int id;
    private int teacherID;
    private int year;
    private List<SchedulePeriod> schedule;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getTeacherID() {
        return teacherID;
    }

    public void setTeacherID(int teacherID) {
        this.teacherID = teacherID;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public List<SchedulePeriod> getSchedule() {
        return schedule;
    }

    public void setSchedule(List<SchedulePeriod> schedule) {
        this.schedule = schedule;
    }
}

class SchedulePeriod{
    private int period;
    private String mon = "---";
    private String tue = "---";
    private String wed = "---";
    private String thu = "---";
    private String fri = "---";


    public int getPeriod() {
        return period;
    }

    public void setPeriod(int period) {
        this.period = period;
    }

    public String getMon() {
        return mon;
    }

    public void setMon(String mon) {
        this.mon = mon;
    }

    public String getTue() {
        return tue;
    }

    public void setTue(String tue) {
        this.tue = tue;
    }

    public String getWed() {
        return wed;
    }

    public void setWed(String wed) {
        this.wed = wed;
    }

    public String getThu() {
        return thu;
    }

    public void setThu(String thu) {
        this.thu = thu;
    }

    public String getFri() {
        return fri;
    }

    public void setFri(String fri) {
        this.fri = fri;
    }
}
