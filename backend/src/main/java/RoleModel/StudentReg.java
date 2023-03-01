package RoleModel;


import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Set;

@ToString

@Document(collection = "stu")
public class StudentReg {

    @Id
    private int id;
    private String StuFirtName;
    private String StuLastName;

    private Set<Role> role;


}
