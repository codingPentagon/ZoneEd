package codingpentagon.sms.backend.models;

import org.springframework.data.annotation.Id;

public class Subject {
    @Id
    private int id;
    private String subjectName;
    private boolean isCompulsory;
    private int classGroupID;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSubjectName() {
        return subjectName;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }

    public boolean isCompulsory() {
        return isCompulsory;
    }

    public void setCompulsory(boolean compulsory) {
        isCompulsory = compulsory;
    }

    public int getClassGroupID() {
        return classGroupID;
    }

    public void setClassGroupID(int classGroupID) {
        this.classGroupID = classGroupID;
    }
}
