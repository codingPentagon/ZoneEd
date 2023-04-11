package RoleModel;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document (collection = "auth_user")

public class AuthUser {
    @Id
    private String id;

    private String fullName;
    private String initName;

    private String email;
    private String password;

    private List<Role> role;

    public <T> AuthUser toAuthUser(T obj, ObjectMapper mapper) {
        return mapper.convertValue(obj, AuthUser.class);
    }
}
