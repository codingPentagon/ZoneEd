package RoleModel;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



@ToString
@Data
@Getter
@Setter

@Document(collection = "Stu")
public class StudentReg {

    @Id
    private String id;
    private String fullName;
    private String initName;
    private String address1;
    private String address2;
    private String email;
    private String dob;


}
