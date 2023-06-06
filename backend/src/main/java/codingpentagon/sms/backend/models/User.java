package codingpentagon.sms.backend.models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class User {
    private int id;
    private String name;
    private int sclID;
    private String role;
    private int clsID;
}
