package codingpentagon.sms.backend.RoleRepo;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import RoleModel.AuthUser;

@Repository

public interface AuthUserRepo extends MongoRepository<AuthUser,String> {
    
    Optional<AuthUser> findByEmail(String email);

    Boolean existsByEmail(String email);
}
