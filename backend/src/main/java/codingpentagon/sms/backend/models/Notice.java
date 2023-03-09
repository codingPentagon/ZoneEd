package codingpentagon.sms.backend.models;

import org.springframework.data.annotation.Id;

import java.sql.Time;
import java.util.Date;

public class Notice {
    @Id
    private int id;
    private int senderID;
    private String receiverCategory;
    private Date date;
    private Time time;
    private String subject;
    private String content;
    private boolean isRead;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getSenderID() {
        return senderID;
    }

    public void setSenderID(int senderID) {
        this.senderID = senderID;
    }

    public String getReceiverCategory() {
        return receiverCategory;
    }

    public void setReceiverCategory(String receiverCategory) {
        this.receiverCategory = receiverCategory;
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

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public boolean isRead() {
        return isRead;
    }

    public void setRead(boolean read) {
        isRead = read;
    }
}
