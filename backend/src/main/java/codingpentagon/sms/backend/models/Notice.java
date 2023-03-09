package codingpentagon.sms.backend.models;

import org.springframework.data.annotation.Id;

import java.sql.Time;
import java.util.Date;

public class Notice {
    @Id
    private int id;
    private int senderID;
    private String[] receiverCategories;
    private Date date;
    private String time;
    private String subject;
    private String content;


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

    public String[] getReceiverCategories() {
        return receiverCategories;
    }

    public void setReceiverCategories(String[] receiverCategories) {
        this.receiverCategories = receiverCategories;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String  time) {
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

}
