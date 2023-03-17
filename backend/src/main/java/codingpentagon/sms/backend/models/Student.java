package codingpentagon.sms.backend.models;


import org.springframework.data.annotation.Id;

public class Student {

    @Id
    private int id;
    private String name;
    private int classID;
    private int[] takenSubjectIDs;

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

    public int getClassID() {
        return classID;
    }

    public void setClassID(int classID) {
        this.classID = classID;
    }

    public int[] getTakenSubjectIDs() {
        return takenSubjectIDs;
    }

    public void setTakenSubjectIDs(int[] takenSubjectIDs) {
        this.takenSubjectIDs = takenSubjectIDs;
    }
}
