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
    private String subject;
    private double mark;
    private double subAvgMark;
    private int term;
    private String stu_id;
    private String stu_name;
    private String stu_grade;
    private String  year;
    

}
