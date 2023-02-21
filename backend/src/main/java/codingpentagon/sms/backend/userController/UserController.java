package codingpentagon.sms.backend.userController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import codingpentagon.sms.backend.userRepo.UserRepo;
import userModel.User;

@RestController
@CrossOrigin (origins = "http://localhost:4200")

public class UserController {
    @Autowired
    private UserRepo userrepo;


    @PostMapping("/register")
    public String register(@RequestBody User user){
        userrepo.save(user);
        return null;
    }
}
