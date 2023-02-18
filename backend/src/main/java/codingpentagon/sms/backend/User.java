package codingpentagon.sms.backend;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "User")

public class User {
    private String fullName;
    private String initName;
    private Date dob;
    private String address1;
    private String address2;
    private String faddress1;
    private String faddress2;
    private String email;
    private int indexNo;
    private String stuClass;
    private Date datee;
    private String fatherName1;
    private String occupation;
    private String contNo;
    private String fatherNIC;
    private char gender;

    public User() {}

    public User(
            String fullName,
            String initName,
            Date dob,
            String address1,
            String address2,
            String faddress1,
            String faddress2,
            String email,
            int indexNo,
            String stuClass,
            Date datee,
            String fatherName1,
            String occupation,
            String contNo,
            String fatherNIC,
            char gender
    ) {
        this.fullName=fullName;
        this.initName=initName;
        this.dob=dob;
        this.address1=address1;
        this.address2=address2;
        this.faddress1=faddress1;
        this.faddress2=faddress2;
        this.email=email;
        this.indexNo=indexNo;
        this.stuClass=stuClass;
        this.datee=datee;
        this.fatherName1=fatherName1;
        this.occupation=occupation;
        this.contNo=contNo;
        this.fatherNIC=fatherNIC;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getInitName() {
        return initName;
    }

    public void setInitName(String initName) {
        this.initName = initName;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getAddress1() {
        return address1;
    }

    public void setAddress1(String address1) {
        this.address1 = address1;
    }

    public String getAddress2() {
        return address2;
    }

    public void setAddress2(String address2) {
        this.address2 = address2;
    }

    public String getFaddress1() {
        return faddress1;
    }

    public void setFaddress1(String faddress1) {
        this.faddress1 = faddress1;
    }

    public String getFaddress2() {
        return faddress2;
    }

    public void setFaddress2(String faddress2) {
        this.faddress2 = faddress2;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getIndexNo() {
        return indexNo;
    }

    public void setIndexNo(int indexNo) {
        this.indexNo = indexNo;
    }

    public String getStuClass() {
        return stuClass;
    }

    public void setStuClass(String stuClass) {
        this.stuClass = stuClass;
    }

    public Date getDatee() {
        return datee;
    }

    public void setDatee(Date datee) {
        this.datee = datee;
    }

    public String getFatherName1() {
        return fatherName1;
    }

    public void setFatherName1(String fatherName1) {
        this.fatherName1 = fatherName1;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public String getContNo() {
        return contNo;
    }

    public void setContNo(String contNo) {
        this.contNo = contNo;
    }

    public String getFatherNIC() {
        return fatherNIC;
    }

    public void setFatherNIC(String fatherNIC) {
        this.fatherNIC = fatherNIC;
    }

    public char getGender() {
        return gender;
    }

    public void setGender(char gender) {
        this.gender = gender;
    }
}