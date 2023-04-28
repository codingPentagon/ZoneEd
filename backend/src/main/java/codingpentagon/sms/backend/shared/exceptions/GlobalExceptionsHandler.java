package codingpentagon.sms.backend.shared.exceptions;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import RoleModel.dto.response.MessageResponse;

@ControllerAdvice

public class GlobalExceptionsHandler extends ResponseEntityExceptionHandler {

  
    @Override //Requestbody and @Valid throw exceptions handle
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
                                                                  HttpHeaders headers, HttpStatus status,
                                                                  WebRequest request) {
        List<String> errors = new ArrayList<>();
        for (FieldError error : ex.getBindingResult().getFieldErrors()) {
            errors.add(error.getField() + ": " + error.getDefaultMessage());
        }
        for (ObjectError error : ex.getBindingResult().getGlobalErrors()) {
            errors.add(error.getObjectName() + ": " + error.getDefaultMessage());
        }

        String message = errors.stream().reduce((s1, s2) -> s1 + "*" + s2).orElse(""); // Combine the error messages using "*" as a separator
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(new MessageResponse(message));
    }

    @ExceptionHandler({GeneralException.class})
    public ResponseEntity<?> handleException(GeneralException ex, WebRequest request) {
        return ResponseEntity
                .status(ex.getCode())
                .body(new MessageResponse(ex.getMessage()));
    }

    @ExceptionHandler({UsernameNotFoundException.class})       // Return a ResponseEntity with a 401 status (Unauthorized) and a MessageResponse body containing the error message
    public ResponseEntity<?> handleUsernameNotFoundException(UsernameNotFoundException ex, WebRequest request) {
        return ResponseEntity
                .status(401)
                .body(new MessageResponse(ex.getMessage()));
    }

    @ExceptionHandler({Exception.class}) // Return a ResponseEntity with a 500 status (Internal Server Error) and a MessageResponse body containing the error message
    public ResponseEntity<?> handleDefaultException(Exception ex, WebRequest request) {
        return ResponseEntity
                .status(500)
                .body(new MessageResponse(ex.getMessage()));
    }

  
    
}
