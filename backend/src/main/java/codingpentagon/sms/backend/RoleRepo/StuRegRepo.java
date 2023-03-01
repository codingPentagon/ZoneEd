package codingpentagon.sms.backend.RoleRepo;

import RoleModel.StudentReg;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StuRegRepo extends MongoRepository<StudentReg,String> {
}
