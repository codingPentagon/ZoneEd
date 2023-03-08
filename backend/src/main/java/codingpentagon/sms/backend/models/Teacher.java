package codingpentagon.sms.backend.models;

import org.springframework.data.annotation.Id;

public class Teacher {

    @Id
    private int id;
    private String name;
    private String subject;
    private int sclID;
    private int classID;

    public int getClassID() {
        return classID;
    }

    public void setClassID(int classID) {
        this.classID = classID;
    }

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

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public int getSclID() {
        return sclID;
    }

    public void setSclID(int sclID) {
        this.sclID = sclID;
    }
}
