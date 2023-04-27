package codingpentagon.sms.backend.controllers;

import codingpentagon.sms.backend.models.User;
import codingpentagon.sms.backend.repositories.UserRepository;
import codingpentagon.sms.backend.services.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    UserService userService;
    public UserController(UserRepository userRepo) {this.userService = new UserService(userRepo);}

    @PostMapping("user/")
    public void createUser(@RequestBody User user) {
        this.userService.saveUser(user);
    }

    @GetMapping("user/{sclID}")
    public List<User> getUser(@PathVariable int sclID) {
        return this.userService.findUser(sclID);
    }
}
