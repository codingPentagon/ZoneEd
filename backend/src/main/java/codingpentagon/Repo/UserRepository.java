package codingpentagon.Repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import codingpentagon.model.User;

@Repository

public interface UserRepository extends MongoRepository<User,Long> {
    User findByEmail(String email);

	User findByToken(String token);
    
}
