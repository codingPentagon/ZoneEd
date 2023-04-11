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
    private String jwtSecret;

    @Value("${zone_ed.app.jwtExpirationMs}")
    private int jwtExpirationMs;

    public String generateJwtToken(Authentication authentication, Map<String, Object> claims) {

        AuthUserDetails userPrincipal = (AuthUserDetails) authentication.getPrincipal();

        claims.put(Claims.SUBJECT, userPrincipal.getUsername());
        claims.put(Claims.ISSUED_AT, new Date());
        claims.put(Claims.EXPIRATION, new Date((new Date()).getTime() + jwtExpirationMs));
        claims.put("exp_in", jwtExpirationMs);

        return Jwts.builder()
                .setClaims(claims)
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();
    }

    public String getUserNameFromJwtToken(String token) {
        return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody().getSubject();
    }

    public <T> T getClaims(String token, String key, Class<T> type) {
        return Jwts.parser()
                .setSigningKey(jwtSecret).parseClaimsJws(token).getBody().get(key, type);
    }

    public boolean validateJwtToken(String authToken) {
        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);
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

        return false;
    }
}
