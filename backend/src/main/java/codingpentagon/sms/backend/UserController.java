package codingpentagon.sms.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin (origins = "http://localhost:65348")
public class UserController {

    @Autowired
    private UserRepository repo;


    @PostMapping("/register")
    public String register(@RequestBody User user) {
        repo.save(user);
        return null;
    }


}