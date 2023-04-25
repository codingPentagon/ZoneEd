package codingpentagon.sms.backend.models;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

@Getter
@Setter
public class School {
    @Id
    private int id;
    private String name;
}
