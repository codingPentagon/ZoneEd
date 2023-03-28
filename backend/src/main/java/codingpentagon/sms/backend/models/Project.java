package codingpentagon.sms.backend.models;

import org.springframework.data.annotation.Id;

import java.util.Date;

public class Project {
    @Id
    private int id;
    private Date createdDate;
    private String title;
    private int proposalID;
    private Date startDate;
    private Date endDate;
    private int responsiblePersonIDs;
    private int schoolID;
    private int principalID;
    private Milestone milestones;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getProposalID() {
        return proposalID;
    }

    public void setProposalID(int proposalID) {
        this.proposalID = proposalID;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public int getResponsiblePersonIDs() {
        return responsiblePersonIDs;
    }

    public void setResponsiblePersonIDs(int responsiblePersonIDs) {
        this.responsiblePersonIDs = responsiblePersonIDs;
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

    public Milestone getMilestones() {
        return milestones;
    }

    public void setMilestones(Milestone milestones) {
        this.milestones = milestones;
    }
}

class Milestone {
    private String feedback;
    private Date dueDate;
    private Date createdDate;
    private String title;
    private String[] proofs;

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }

    public Date getDueDate() {
        return dueDate;
    }

    public void setDueDate(Date dueDate) {
        this.dueDate = dueDate;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String[] getProofs() {
        return proofs;
    }

    public void setProofs(String[] proofs) {
        this.proofs = proofs;
    }
}