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
  private AuthService authService;  // Autowire the AuthService dependency for authentication-related operations.



  @PostMapping("/reg/stu")
  public ResponseEntity<StudentReg> register(@Valid @RequestBody StudentRegDto dto){
    // Endpoint to register a student.
    // It takes a valid StudentRegDto object in the request body.

    log.info("Rest request to create student. request {}", dto);     // Output a log message indicating the REST request to create a student.

    var res=authService.createUser(dto);   // Call the authService to create a user (student) based on the provided StudentRegDto.

    return ResponseEntity.ok().body(res);   // Return a ResponseEntity with the created StudentReg object in the response body.
  }


  
  @PostMapping("/reg/tch")
  public ResponseEntity<TeacherReg> register(@Valid @RequestBody TeacherRegDto dto) {

    // Endpoint to register a teacher.
    // It takes a valid TeacherRegDto object in the request body.

      log.info("Rest request to create teacher. request {}", dto);  // Output a log message indicating the REST request to create a teacher.

      var res = authService.createTeacher(dto);   // Call the authService to create a teacher based on the provided TeacherRegDto.

      return ResponseEntity.ok().body(res); // Return a ResponseEntity with the created TeacherReg object in the response body.
  }

  @PostMapping("/signIn")
  public ResponseEntity<SignInResponse> signIn(@Valid @RequestBody SignInReqDto dto) {

    // Endpoint for user sign-in.
    // It takes a valid SignInReqDto object in the request body.

      log.info("Rest request to sign in user. request {}", dto); // Output a log message indicating the REST request to sign in a user.


      SignInResponse res = authService.signIn(dto);  // Call the authService to perform the sign-in operation based on the provided SignInReqDto.
      return ResponseEntity.ok().body(res);  // Return a ResponseEntity with the SignInResponse object in the response body.
  }

  @PostMapping("/account")
  public ResponseEntity<?> account() {// Endpoint to retrieve the current user's account details.
      log.info("Rest request to get current."); // Output a log message indicating the REST request to get the current user's account details.
      return ResponseEntity.ok().body(authService.getCurrentUser());     // Return a ResponseEntity with the current user's account details in the response body.
    } 
  }

    

