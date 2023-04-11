package RoleModel.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class SignInReqDto {

    private String email;

    private String password;

    private String type;

    
}
