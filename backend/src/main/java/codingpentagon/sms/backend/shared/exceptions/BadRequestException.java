package codingpentagon.sms.backend.shared.exceptions;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor

public class BadRequestException extends GeneralException {
    public BadRequestException(String message, Object... args){
        super(400, String.format(message, args));     // Call the constructor of the parent class (GeneralException) with a status code and formatted message
    }

}
