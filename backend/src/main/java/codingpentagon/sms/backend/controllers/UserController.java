package codingpentagon.sms.backend.controllers;

import codingpentagon.sms.backend.models.User;
import codingpentagon.sms.backend.repositories.UserRepository;
import codingpentagon.sms.backend.services.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {
    UserService userService;
    public UserController(UserRepository userRepo) {this.userService = new UserService(userRepo);}

    @PostMapping("user/")
    public void createUser(@RequestBody User user) {
        this.userService.saveUser(user);
    }

    @GetMapping("user/byTypeOnRole/{sclID}/{role}/{type}/{clsID}")
    public List<User> fetchUsersByTypeOnRole(@PathVariable int sclID, @PathVariable String role, @PathVariable String type, @PathVariable int clsID) {
        return this.userService.findUsersByTypeOnRole(sclID,role,type,clsID);
    }

    @GetMapping("user/{userID}")
    public Optional<User> fetchUser(@PathVariable int userID) {
        return this.userService.findUser(userID);
    }

}
