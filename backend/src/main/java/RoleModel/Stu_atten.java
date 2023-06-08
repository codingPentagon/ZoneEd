package RoleModel;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter

@Document (collection = "stu_attend")
public class Stu_atten {

    @Id
   private String indexNo;
    private String name;
    private String test1;
    private String year;
    private String month;
    private String classes;
    private String teacher;
    private String test2;
    private String test3;
    private String test4; 
    private String test5;
    private String test6;
    private String test7;
    private String test8;
    private String test9;
    private String test10;
    private String test11;
    private String test12;
    private String test13;
    private String test14;
    private String test15;
    private String test16;
    private String test17;
    private String test18;
    private String test19;
    private String test20;
    private String test21;
    private String test22;
    private String test23;
    private String test24;
    private String test25;
    private String test26;
    private String test27;
    private String test28;
    private String test29;
    private String test30;
    private String test31;  
    private String totaldays;
    private String absentdays;
    private String presentdays;


    
}
