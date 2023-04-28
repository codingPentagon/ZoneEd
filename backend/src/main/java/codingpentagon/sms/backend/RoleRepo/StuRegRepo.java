package codingpentagon.sms.backend.RoleRepo;

import RoleModel.StudentReg;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface StuRegRepo extends MongoRepository<StudentReg, String> { // Interface declaration for the StuRegRepo repository that extends the MongoRepository interface.
  Optional<StudentReg> findById(String fullName);// Method declaration to find a StudentReg entity by full name.
// It returns an Optional that either contains the StudentReg object with the matching full name or is empty.

  Boolean existsByIndexNo(String index);  

}
