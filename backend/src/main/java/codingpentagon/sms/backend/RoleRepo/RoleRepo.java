package codingpentagon.sms.backend.RoleRepo;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import RoleModel.Role;

@Repository

public interface RoleRepo extends MongoRepository<Role,String> {
    Optional<Role> findByName(String name);// Method declaration to find an role entity by name.
}
