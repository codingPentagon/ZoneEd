package codingpentagon.sms.backend.RoleRepo;

import RoleModel.Role;
import RoleModel.StudentReg;
import org.springframework.data.mongodb.repository.MongoRepository;



public interface RoleRepo extends MongoRepository<Role,Integer> {

    StudentReg save(StudentReg user);



}

