package codingpentagon.sms.backend.shared.exceptions;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor

//for handle unauth login
public class UnAuthorizeException extends GeneralException {
    

    public UnAuthorizeException(String message, Object... args){
        super(401, String.format(message, args));
    }

}
