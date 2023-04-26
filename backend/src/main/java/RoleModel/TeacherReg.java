package RoleModel;



import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Data

@Document (collection = "Teacher")

public class TeacherReg extends BaseUser {

    @Id

   
    private String fullName;
    private String initName;
    private String address1;
    private String address2;
    private String email;
   // private String password;
    private Date tchDob;
    private int tchContNo;
    private String tchNic;
    private Date tchAdmDate;
    private String tchId;
    private String tchGender;
    private String subDetails;

   


}
