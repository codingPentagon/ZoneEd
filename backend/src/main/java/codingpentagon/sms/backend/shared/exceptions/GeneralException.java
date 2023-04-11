package codingpentagon.sms.backend.shared.exceptions;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class GeneralException extends RuntimeException {


    private int code;

    public GeneralException( String message) {

        super(message);
        this.code = 500;
    }
    
    public GeneralException(int code, String message){
        super(message);
        this.code = code;
    }
}
