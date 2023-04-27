package codingpentagon.sms.backend.models;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import java.util.Date;

@Getter
@Setter
public class Proposal {
    @Id
    private int id;
    private String title;
    private String status;
    private Date createdDate;
    private String comment;
    private String feedback;
    private int schoolID;
    private FileMetadata[] documents;
}
