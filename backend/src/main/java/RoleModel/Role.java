package RoleModel;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Document (collection = "Role")

public class Role {

    @Id

    private int indexNo;
    private String fullName;
    private String initName;
    private String address1;
    private String address2;
    private String email;
    private int dob;

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    private  String roleName;

    public int getIndexNo() {
        return indexNo;
    }

    public void setIndexNo(int indexNo) {
        this.indexNo = indexNo;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getDob() {
        return dob;
    }

    public void setDob(int dob) {
        this.dob = dob;
    }
}
