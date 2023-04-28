package codingpentagon.sms.backend.security.jwt;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class AuthEntryPointJwt implements AuthenticationEntryPoint{   // Class declaration for the AuthEntryPointJwt class that implements the AuthenticationEntryPoint interface.

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response,
                         AuthenticationException authException) throws IOException, ServletException {
         // Method implementation for the commence() method.
        // It handles the commencement of the authentication process.

        log.error("Unauthorized error: {}", authException.getMessage());  // Output an error log message indicating the unauthorized error with the message from the AuthenticationException.
        response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Error: Unauthorized");  // Send an HTTP error response with the status code SC_UNAUTHORIZED (401) and the message "Error: Unauthorized".
    }
    
}
