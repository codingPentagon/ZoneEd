package codingpentagon.sms.backend.RoleRepo;

import RoleModel.Role;
import org.springframework.data.mongodb.repository.MongoRepository;



public interface RoleRepo extends MongoRepository<Role,Integer> {

    String save(org.apache.catalina.User user);



}
