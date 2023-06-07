package RoleModel;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter

@Document
public class Stu_atten {

    private String indexNo;
    private String name;
    private String Field_1;
    private String year;
    private String month;
    private String classes;
    private String teacher;
    
}
