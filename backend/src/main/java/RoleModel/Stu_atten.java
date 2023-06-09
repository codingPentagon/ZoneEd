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
    private String test1="p";
    private String year;
    private String month;
    private String classes;
    private String teacher;
    private String test2="A";
    private String test3="A";
    private String test4="A"; 
    private String test5="A";
    private String test6="A";
    private String test7="A";
    private String test8="A";
    private String test9="A";
    private String test10="A";
    private String test11="A";
    private String test12="A";
    private String test13="A";
    private String test14="A";
    private String test15="A";
    private String test16="A";
    private String test17="A";
    private String test18="A";
    private String test19="A";
    private String test20="A";
    private String test21="A";
    private String test22="A";
    private String test23="A";
    private String test24="A";
    private String test25="A";
    private String test26="A";
    private String test27="A";
    private String test28="A";
    private String test29="A";
    private String test30="A";
    private String test31="A";  
     private String totaldays="23";
     private String absentdays="5";
    private String presentdays="18";


    
}
