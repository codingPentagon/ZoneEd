package codingpentagon.sms.backend.repositories;

import codingpentagon.sms.backend.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface UserRepository extends MongoRepository<User,Integer> {
    List<User> findBySclID(int sclID);
}
