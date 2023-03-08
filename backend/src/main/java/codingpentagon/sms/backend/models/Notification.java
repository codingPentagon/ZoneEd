package codingpentagon.sms.backend.models;

import org.springframework.data.annotation.Id;

import java.sql.Time;
import java.util.Date;

public class Notification {
    @Id
    private int id;
    private int receiverID;
    private Date date;
    private Time time;
    private String content;
    private String event;
    private boolean isRead;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getReceiverID() {
        return receiverID;
    }

    public void setReceiverID(int receiverID) {
        this.receiverID = receiverID;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getEvent() {
        return event;
    }

    public void setEvent(String event) {
        this.event = event;
    }

    public boolean isRead() {
        return isRead;
    }

    public void setRead(boolean read) {
        isRead = read;
    }
}
