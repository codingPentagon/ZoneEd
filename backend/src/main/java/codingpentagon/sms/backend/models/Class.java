package codingpentagon.sms.backend.models;

import org.springframework.data.annotation.Id;

import java.util.Date;

public class Class {

    @Id
    private int id;
    private String name;
    private int sclID;
    private int teacherID;
    private Date allocatedDate;
    private int girlsCount;
    private int boysCount;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getSclID() {
        return sclID;
    }

    public void setSclID(int sclID) {
        this.sclID = sclID;
    }

    public int getTeacherID() {
        return teacherID;
    }

    public void setTeacherID(int teacherID) {
        this.teacherID = teacherID;
    }

    public Date getAllocatedDate() {
        return allocatedDate;
    }

    public void setAllocatedDate(Date allocatedDate) {
        this.allocatedDate = allocatedDate;
    }

    public int getGirlsCount() {
        return girlsCount;
    }

    public void setGirlsCount(int girlsCount) {
        this.girlsCount = girlsCount;
    }

    public int getBoysCount() {
        return boysCount;
    }

    public void setBoysCount(int boysCount) {
        this.boysCount = boysCount;
    }
}
