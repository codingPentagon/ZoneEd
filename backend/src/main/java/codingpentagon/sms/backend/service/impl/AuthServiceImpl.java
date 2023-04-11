package codingpentagon.sms.backend.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.apache.logging.log4j.message.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.*;
import RoleModel.AuthUser;
import RoleModel.Role;
import RoleModel.StudentReg;
import RoleModel.TeacherReg;
import RoleModel.dto.request.SignInReqDto;
import RoleModel.dto.response.SignInResponse;
import RoleModel.dto.response.StudentRegDto;
import RoleModel.dto.response.TeacherRegDto;
import codingpentagon.sms.backend.RoleRepo.AuthUserRepo;
import codingpentagon.sms.backend.RoleRepo.RoleRepo;
import codingpentagon.sms.backend.RoleRepo.StuRegRepo;
import codingpentagon.sms.backend.RoleRepo.TchRegRepo;
import codingpentagon.sms.backend.security.jwt.JwtUtils;
import codingpentagon.sms.backend.service.AuthService;
import codingpentagon.sms.backend.services.AuthUserDetailsService;
import codingpentagon.sms.backend.shared.exceptions.BadRequestException;
import codingpentagon.sms.backend.shared.exceptions.UnAuthorizeException;
import static codingpentagon.sms.backend.shared.Constant.ROLE_STUDENT;
import static codingpentagon.sms.backend.shared.Constant.ROLE_TEACHER;

@Service

public class AuthServiceImpl implements AuthService {
    @Autowired
    private StuRegRepo stuRegRepo;

    @Autowired
    private AuthUserRepo authUserRepo;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtils jwtUtils;


    @Autowired
    private TchRegRepo tchRegRepo;

    @Autowired
    private RoleRepo roleRepo;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthUserDetailsService authUserDetailsService;

    @Override
    public StudentReg createUser(StudentRegDto dto) {

        if (authUserRepo.existsByEmail(dto.getEmail())) {
            throw new BadRequestException("Student exists for email %s", dto.getEmail());
        }

        if (stuRegRepo.existsByIndexNo(dto.getIndexNo())) {
            throw new BadRequestException("Student exists for index no %s", dto.getEmail());
        }

        StudentReg studentReg = dto.toStudentReg(dto, objectMapper);
        AuthUser authUser = new AuthUser().toAuthUser(dto, objectMapper);

        String encodedPassword = passwordEncoder.encode(dto.getPassword());
        authUser.setPassword(encodedPassword);

        Role studentRole = getRole(ROLE_STUDENT);
        authUser.setRole(List.of(studentRole));

        AuthUser authUserRes = authUserRepo.save(authUser);
        studentReg.setAuthUser(authUserRes);


        return stuRegRepo.save(studentReg);
    }

    @Override
    public TeacherReg createTeacher(TeacherRegDto dto) {

        if (authUserRepo.existsByEmail(dto.getEmail())) {
            throw new BadRequestException("Teacher does not exists for email %s", dto.getEmail());
        }

        TeacherReg teacherReg = dto.toTeacherReg(dto, objectMapper);
        AuthUser authUser = new AuthUser().toAuthUser(dto, objectMapper);

        String encodedPassword = passwordEncoder.encode(dto.getPassword());
        authUser.setPassword(encodedPassword);

        Role studentRole = getRole(ROLE_TEACHER);
        authUser.setRole(List.of(studentRole));

        AuthUser authUserRes = authUserRepo.save(authUser);
        teacherReg.setAuthUser(authUserRes);

        return tchRegRepo.save(teacherReg);

    }


    @Override
    public SignInResponse signIn(SignInReqDto dto) {

        AuthUser user = authUserDetailsService.getAuthUserByEmail(dto.getEmail())
                .orElseThrow(() -> new UnAuthorizeException("Unauthorized User"));

        if (!passwordEncoder.matches(dto.getPassword(), user.getPassword())) {
            throw new UnAuthorizeException("Username password error");
        }

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        dto.getEmail(),
                        dto.getPassword(),
                        user.getRole().stream()
                                .map(role -> new SimpleGrantedAuthority(role.getName().toUpperCase()))
                                .collect(Collectors.toList())
                ));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        Map<String, Object> claims = new HashMap<>();
        claims.put("role", user.getRole().stream()
                .map(role -> role.getName().toUpperCase())
                .reduce((s1, s2) -> s1 + "," + s2)
                .orElse(null)
        );
        claims.put("id", user.getId());

        String jwt = jwtUtils.generateJwtToken(authentication, claims);

        return SignInResponse.builder()
                .accessToken(jwt)
                .build();


    }

    @Override
    public AuthUser getCurrentUser() {
        return authUserDetailsService.getCurrentUser();
    }

    private Role getRole(String roleName) {
        return roleRepo.findByName(roleName)
                .orElseThrow(() -> new RuntimeException("Cannot find role " + ROLE_STUDENT));
    }
    
}
