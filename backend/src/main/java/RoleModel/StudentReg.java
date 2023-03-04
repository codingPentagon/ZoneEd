package RoleModel;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



@ToString

@Getter
@Setter

@Document(collection = "stu")
public class StudentReg {

    @Id
    private int id;
    private String fullName;
    private String initName;
    private String address1;

    private String address2;


}
