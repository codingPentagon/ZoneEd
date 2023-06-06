package codingpentagon.sms.backend.models;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import java.util.Date;

@Getter
@Setter
public class Notice {
    @Id
    private int id;
    private int senderID;
    private String[] receiverCategories;
    private Date date;
    private String time;
    private String subject;
    private String content;
    private int sclID;
    private int forwardedFrom;
}
