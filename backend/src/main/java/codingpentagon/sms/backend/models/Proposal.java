package codingpentagon.sms.backend.models;

import org.springframework.data.annotation.Id;

import java.io.File;
import java.util.Date;

public class Proposal {
    @Id
    private int id;
    private String title;
    private String status;
    private Date createdDate;
    private String comment;
    private String feedback;
    private String fileName;
    private int schoolID;
    private int principalID;
    private File documents;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public int getSchoolID() {
        return schoolID;
    }

    public void setSchoolID(int schoolID) {
        this.schoolID = schoolID;
    }

    public int getPrincipalID() {
        return principalID;
    }

    public void setPrincipalID(int principalID) {
        this.principalID = principalID;
    }

    public File getDocuments() {
        return documents;
    }

    public void setDocuments(File documents) {
        this.documents = documents;
    }
}
