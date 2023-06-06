package RoleModel;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
@ToString
@Getter
@Setter

@Document(collection = "stu_marks")
public class Stud_marks {
    @Id
    private String id;
    private String name;
    private int age;
}
