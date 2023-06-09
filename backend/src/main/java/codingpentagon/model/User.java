package codingpentagon.model;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.ToString;

@ToString

@Document (collection="auth_user")

public class User {
    @Id
   // private Long id;
	private String fullName;
    private String email;
	private String password;
	private String token;
    private LocalDateTime tokenCreationDate;
    public void setToken(String generateToken) {
    }
    public void setTokenCreationDate(LocalDateTime now) {
    }
    public String getToken() {
        return null;
    }
    public LocalDateTime getTokenCreationDate() {
        return null;
    }
    public void setPassword(String password2) {
    }
    
}
