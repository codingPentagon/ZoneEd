package codingpentagon.sms.backend.repositories;

import codingpentagon.sms.backend.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface UserRepository extends MongoRepository<User,Integer> {
    List<User> findBySclID(int sclID);

    List<User> findBySclIDAndRole(int sclID, String type);

    List<User> findByRole(String type);

    List<User> findBySclIDAndRoleAndClsID(int sclID, String type, int clsID);
}
