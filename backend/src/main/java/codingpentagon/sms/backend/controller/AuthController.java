package codingpentagon.sms.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import RoleModel.StudentReg;
import RoleModel.TeacherReg;
import RoleModel.dto.request.SignInReqDto;
import RoleModel.dto.response.SignInResponse;
import RoleModel.dto.response.StudentRegDto;
import RoleModel.dto.response.TeacherRegDto;
import codingpentagon.sms.backend.service.AuthService;
import lombok.var;
import lombok.extern.slf4j.Slf4j;


import javax.validation.Valid;


@RestController
@RequestMapping("/api/auth")
@Slf4j
public class AuthController {

  @Autowired
  private AuthService authService;


  @PostMapping("/reg/stu")
  public ResponseEntity<StudentReg> register(@Valid @RequestBody StudentRegDto dto){
    log.info("Rest request to create student. request {}", dto);

    var res=authService.createUser(dto);
    return ResponseEntity.ok().body(res);
  }


  
  @PostMapping("/reg/tch")
  public ResponseEntity<TeacherReg> register(@Valid @RequestBody TeacherRegDto dto) {
      log.info("Rest request to create teacher. request {}", dto);

      var res = authService.createTeacher(dto);
      return ResponseEntity.ok().body(res);
  }

  @PostMapping("/signIn")
  public ResponseEntity<SignInResponse> signIn(@Valid @RequestBody SignInReqDto dto) {
      log.info("Rest request to sign in user. request {}", dto);

      SignInResponse res = authService.signIn(dto);
      return ResponseEntity.ok().body(res);
  }

  @PostMapping("/account")
  public ResponseEntity<?> account() {
      log.info("Rest request to get current.");
      return ResponseEntity.ok().body(authService.getCurrentUser());
  }

    
}
