package codingpentagon.sms.backend.userRepo;

import org.springframework.data.mongodb.repository.MongoRepository;

import userModel.User;

public interface UserRepo extends MongoRepository<User,Integer> {
    
}
