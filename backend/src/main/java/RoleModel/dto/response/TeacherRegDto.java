package RoleModel.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

import com.fasterxml.jackson.databind.ObjectMapper;

import RoleModel.TeacherReg;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class TeacherRegDto {

    private String fullName;
    private String initName;

    private String email;
    private String password;

    private String address1;
    private String address2;
    private Date tchDob;
    private int tchContNo;
    private String tchNic;
    private Date tchAdmDate;
    private String tchId;
    private String tchGender;
    private String subDetails;


    
    public TeacherReg toTeacherReg(TeacherRegDto dto, ObjectMapper mapper){
        return mapper.convertValue(dto, TeacherReg.class);
    }
    
}
