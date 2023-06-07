package codingpentagon.sms.backend.models;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

@Getter
@Setter
public class NotificationToken {
    @Id
    private int id;
    private String[] tokens;
    private int userID;
}
