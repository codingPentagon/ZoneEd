package codingpentagon.sms.backend.models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FileMetadata {
    private String name;
    private long size;
    private String pathRef;
    private String downloadUrl;
}
