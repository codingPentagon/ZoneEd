package codingpentagon.sms.backend.RoleController;

import RoleModel.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import codingpentagon.sms.backend.RoleRepo.RoleRepo;

@RestController
@CrossOrigin (origins = "http://localhost:4200")
@RequestMapping ("api/v1/user")


public class RoleController {
    @Autowired
    private RoleRepo roleRepo;


    @PostMapping("/register")
    public Role register(@RequestBody Role role){

        return  roleRepo.save(role);
    }

    @PostMapping({"/createNewRole"})

    public  Role createNewRole(@RequestBody Role role){
        return  roleRepo.save(role);
    }
}
