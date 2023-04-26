package RoleModel;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.sql.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



@ToString
@Data
@Getter
@Setter

@Document(collection = "Stu")
public class StudentReg extends BaseUser {

    @Id
    
    private String fullName;
    private String initName;
    private String address1;
    private String address2;
    private String indexNo;
   private String email;
    private Date dob;
  
    private String gender;
    private String stuClass;
    private String admDate;
    private String fatherName1;
    private String faddress1;
    private String faddress2;
    private String faNic;
    private String faOccupation;
    private String faContNo;





}
