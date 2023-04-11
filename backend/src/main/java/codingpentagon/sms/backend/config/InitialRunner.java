package codingpentagon.sms.backend.config;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import RoleModel.Role;
import codingpentagon.sms.backend.RoleRepo.RoleRepo;
import static codingpentagon.sms.backend.shared.Constant.ROLE_STUDENT;
import static codingpentagon.sms.backend.shared.Constant.ROLE_TEACHER;



@Configuration

public class InitialRunner {

    @Autowired
    private RoleRepo roleRepo;


    @PostConstruct
    public void insertRoles() {
        // Add ROLE_STUDENT and ROLE_TEACHER to the database
        addInitialRoles();
    }


    public void addInitialRoles() {
        roleRepo.findByName(ROLE_STUDENT).ifPresentOrElse(role -> {
            Role studentRole = Role.builder()
                    .id(role.getId())
                    .name(ROLE_STUDENT)
                    .build();
            roleRepo.save(studentRole);
        }, () -> {
            Role studentRole = Role.builder()
                    .name(ROLE_STUDENT)
                    .build();
            roleRepo.save(studentRole);
        });

        roleRepo.findByName(ROLE_TEACHER).ifPresentOrElse(role -> {
            Role tchRole = Role.builder()
                    .id(role.getId())
                    .name(ROLE_TEACHER)
                    .build();
            roleRepo.save(tchRole);
        }, () -> {
            Role tchRole = Role.builder()
                    .name(ROLE_TEACHER)
                    .build();
            roleRepo.save(tchRole);
        });
    }
    
}
