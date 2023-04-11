package RoleModel.dto.response;

import java.time.LocalDate;

import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.ObjectMapper;

import RoleModel.StudentReg;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StudentRegDto {

    @NotBlank
    private String fullName;

    @NotBlank
    private String initName;

    @NotBlank
    private String email;

    @NotBlank
    private String password;

    private String address1;
    private String address2;
    @NotBlank
    private String indexNo;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dob;

    @NotBlank
    private String gender;

    @NotBlank
    private String stuClass;
    private String admDate;
    private String fatherName1;
    private String faddress1;
    private String faddress2;

    @NotBlank
    private String faNic;
    private String faOccupation;
    private String faContNo;

    public StudentReg toStudentReg(StudentRegDto dto, ObjectMapper mapper) {
        return mapper.convertValue(dto, StudentReg.class);
    }

    @Override
    public String toString() {
        return "{" +
                "\"fullName\":\"" + fullName + "\"," +
                "\"initName\":\"" + initName + "\"," +
                "\"email\":\"" + email + "\"," +
                "\"password\":\"" + "***********" + "\"," +
                "\"address1\":\"" + address1 + "\"," +
                "\"address2\":\"" + address2 + "\"," +
                "\"indexNo\":\"" + indexNo + "\"," +
                "\"dob\":" + dob + "," +
                "\"gender\":\"" + gender + "\"," +
                "\"stuClass\":\"" + stuClass + "\"," +
                "\"admDate\":\"" + admDate + "\"," +
                "\"fatherName1\":\"" + fatherName1 + "\"," +
                "\"faddress1\":\"" + faddress1 + "\"," +
                "\"faddress2\":\"" + faddress2 + "\"," +
                "\"faNic\":\"" + faNic + "\"," +
                "\"faOccupation\":\"" + faOccupation + "\"," +
                "\"faContNo\":\"" + faContNo + "\"" +
                "}";
    }
    
}
