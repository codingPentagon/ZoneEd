package codingpentagon.sms.backend.models;

import org.springframework.data.annotation.Id;

public class Class {
    @Id
    private int id;
    private String name;
    private int sclID;

    public int getSclID() {
        return sclID;
    }

    public void setSclID(int sclID) {
        this.sclID = sclID;
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
}
