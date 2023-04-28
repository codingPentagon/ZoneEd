package codingpentagon.sms.backend.security.jwt;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import codingpentagon.sms.backend.services.AuthUserDetailsService;

@Component
public class AuthTokenFilter extends OncePerRequestFilter { // Class declaration for the AuthTokenFilter class that extends the OncePerRequestFilter class.
    
    @Autowired
    private JwtUtils jwtUtils;// Autowire the JwtUtils dependency for JWT-related operations.

    @Autowired
    private AuthUserDetailsService userDetailsService;  // Autowire the AuthUserDetailsService dependency for user details retrieval.


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
         // Method implementation for the doFilterInternal() method.
        // It performs the filtering logic for each incoming request.

                try {
                    String jwt = parseJwt(request); // Parse the JWT token from the request.
                    if (jwt != null && jwtUtils.validateJwtToken(jwt)) {   // If the JWT token is not null and is valid.
                        String username = jwtUtils.getUserNameFromJwtToken(jwt);   // Extract the username from the JWT token.
        
                        UserDetails userDetails = userDetailsService.loadUserByUsername(username);     // Load the user details from the userDetailsService based on the username.
                        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetails, null,
                                userDetails.getAuthorities());  // Create an authentication token with the user details and authorities.
                        authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));    // Set the authentication details for the token.
        
                        SecurityContextHolder.getContext().setAuthentication(authentication);// Set the authentication object in the SecurityContextHolder.
                    }
                } catch (Exception e) {
                    logger.error("Cannot set user authentication: {}", e);//an exception while setting user authentication.
                }
        

                filterChain.doFilter(request, response);// Proceed with the filter chain.
    }

    private String parseJwt(HttpServletRequest request) {// Method to parse the JWT token from the request.
        String headerAuth = request.getHeader("Authorization");    // Get the value of the "Authorization" header.

        if (StringUtils.hasText(headerAuth) && headerAuth.startsWith("Bearer ")) {     // If the header value is not empty and starts with "Bearer ".
            return headerAuth.substring(7);// Return the token value after removing the "Bearer " prefix.
        }

        return null;// Return null if the token is not found or is in an invalid format
    }
    
}
