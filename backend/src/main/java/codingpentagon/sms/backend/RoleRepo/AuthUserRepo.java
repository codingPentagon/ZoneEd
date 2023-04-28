package codingpentagon.sms.backend.RoleRepo;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import RoleModel.AuthUser;

@Repository

public interface AuthUserRepo extends MongoRepository<AuthUser,String> {// Interface declaration for the AuthUserRepo repository that extends the MongoRepository interface.
    
    Optional<AuthUser> findByEmail(String email);    // Method declaration to find an AuthUser entity by email.

    Boolean existsByEmail(String email);// Method declaration to check if an AuthUser entity exists with a given email.
}
