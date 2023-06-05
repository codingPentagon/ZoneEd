package codingpentagon.sms.backend.models;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import java.util.Date;

@Getter
@Setter
public class AcsGrantRequest {
    @Id
    private int id;
    private Date submittedDate;
    private int teacherID;
    private String note;
    private Date fromDate;
    private Date toDate;
    private String status;
    private int sclID;
}
