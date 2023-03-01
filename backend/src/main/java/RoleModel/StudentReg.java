package RoleModel;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Set;

@ToString

@Getter
@Setter

@Document(collection = "stu")
public class StudentReg {

    @Id
    private int id;
    private String StuFirtName;
    private String StuLastName;

    private String role;


}
