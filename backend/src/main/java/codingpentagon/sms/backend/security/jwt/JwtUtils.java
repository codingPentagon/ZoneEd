package codingpentagon.sms.backend.security.jwt;

import java.util.Date;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import codingpentagon.sms.backend.services.AuthUserDetails;
import io.jsonwebtoken.*;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class JwtUtils {
    @Value("${zone_ed.app.jwtSecret}")
    private String jwtSecret;  // Read the value of the "zone_ed.app.jwtSecret" property from the configuration.

    @Value("${zone_ed.app.jwtExpirationMs}")
    private int jwtExpirationMs;  // Read the value of the "zone_ed.app.jwtExpirationMs" property from the configuration.

    public String generateJwtToken(Authentication authentication, Map<String, Object> claims) {    // Method to generate a JWT token.

        AuthUserDetails userPrincipal = (AuthUserDetails) authentication.getPrincipal();     // Get the authenticated user details from the authentication object.


         // Set the claims for the token including subject, issued at, expiration, and custom claim.
        claims.put(Claims.SUBJECT, userPrincipal.getUsername());
        claims.put(Claims.ISSUED_AT, new Date());
        claims.put(Claims.EXPIRATION, new Date((new Date()).getTime() + jwtExpirationMs));
        claims.put("exp_in", jwtExpirationMs);

        return Jwts.builder()        // Build and sign the JWT token with the specified claims and secret key.
                .setClaims(claims)
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();
    }

    public String getUserNameFromJwtToken(String token) {
        return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody().getSubject();  // Parse the JWT token, retrieve the subject (username) from the token's body.
    }

    public <T> T getClaims(String token, String key, Class<T> type) {
        return Jwts.parser()
                .setSigningKey(jwtSecret).parseClaimsJws(token).getBody().get(key, type);    // Parse the JWT token, retrieve the specified claim key, and convert it to the specified type.
    }

    public boolean validateJwtToken(String authToken) {
        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);         // Parse and verify the JWT token using the secret key.
            return true;
        } catch (MalformedJwtException e) {
            log.error("Invalid JWT token: {}", e.getMessage());
        } catch (ExpiredJwtException e) {
            log.error("JWT token is expired: {}", e.getMessage());
        } catch (UnsupportedJwtException e) {
            log.error("JWT token is unsupported: {}", e.getMessage());
        } catch (IllegalArgumentException e) {
            log.error("JWT claims string is empty: {}", e.getMessage());
        }

        return false;// Return false if there is an exception or the token is not valid
    }
}
