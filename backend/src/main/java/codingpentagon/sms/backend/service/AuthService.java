package codingpentagon.sms.backend.service;




import RoleModel.AuthUser;
import RoleModel.StudentReg;
import RoleModel.TeacherReg;
import RoleModel.dto.request.SignInReqDto;
import RoleModel.dto.response.SignInResponse;
import RoleModel.dto.response.StudentRegDto;
import RoleModel.dto.response.TeacherRegDto;




public interface AuthService {
   StudentReg createUser(StudentRegDto dto); // Declares a method createUser() that takes a StudentRegDto object as a parameter and returns a StudentReg object.

     TeacherReg createTeacher(TeacherRegDto dto);

  SignInResponse signIn(SignInReqDto dto);

   AuthUser getCurrentUser();
}
