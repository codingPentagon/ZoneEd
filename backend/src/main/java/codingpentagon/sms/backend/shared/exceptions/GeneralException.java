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

    public GeneralException( String message) {// Call the constructor of the parent class (RuntimeException) with the provided message

        super(message);
        this.code = 500;// Set the default code to 500 (Internal Server Error)
    }
    
    public GeneralException(int code, String message){
        super(message);
        this.code = code;// Set the code to the provided value
    }
}
