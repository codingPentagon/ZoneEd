package userModel;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Document (collection = "User")

public class User {

    @Id
    private String fullName;
    private String initName;
    private String address1;
    private String address2;
    private String email;
    private int dob;
    private int indexNo;
    
}
