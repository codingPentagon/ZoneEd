package codingpentagon.sms.backend.models;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import java.util.Date;
@Getter
@Setter
public class Assessment {
    @Id
    private int id;
    private String name;
    private int sclID;
    private int clsID;
    private int subjectID;
    private int creatorID;
    private Date uploadedDate;
    private Date availableDate;
    private FileMetadata[] documents;
}
