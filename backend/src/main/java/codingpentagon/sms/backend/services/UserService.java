package codingpentagon.sms.backend.services;

import codingpentagon.sms.backend.models.User;
import codingpentagon.sms.backend.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class UserService {
    UserRepository userRepository;
    public UserService(UserRepository userRepo){this.userRepository=userRepo;}

    public void saveUser(User user) {
        user.setId(new Random().nextInt(6000));
        this.userRepository.save(user);
    }

    public Optional<User> findUser(int userID) {
        return this.userRepository.findById(userID);
    }

    public List<User> findUsersByTypeOnRole(int sclID, String role, String type, int clsID) {
        switch (type) {
            case "zonal", "admin" -> {
                return this.userRepository.findByRole(type);
            }
            case "principal" -> {
                if (role.equals("admin") || role.equals("zonal")) {
                    return this.userRepository.findByRole(type);
                }
            }
            case "student", "parent" -> {
                return this.userRepository.findBySclIDAndRoleAndClsID(sclID, type, clsID);
            }
            default -> {
                return this.userRepository.findBySclIDAndRole(sclID, type);
            }
        }
        return null;
    }
}
