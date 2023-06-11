package RoleModel.dto.request;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor

public class PasswordResetDto {

     @NotBlank
    private String resetPasswordCode;

    @NotBlank
    private String newPassword;
    
}
