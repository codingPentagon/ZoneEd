package RoleModel;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.List;

import javax.validation.constraints.Pattern;

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
    //@Pattern(regexp = "^[a-zA-Z0-9]{8}",message = "the password contains ...")
    private String password;

    private List<Role> role;

    public <T> AuthUser toAuthUser(T obj, ObjectMapper mapper) {// Generic method to convert an object to an AuthUser instance using an ObjectMapper
        return mapper.convertValue(obj, AuthUser.class);
    }
}
