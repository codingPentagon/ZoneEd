package codingpentagon.sms.backend.RoleRepo;

import RoleModel.StudentReg;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface StuRegRepo extends MongoRepository<StudentReg, String> {
  Optional<StudentReg> findById(String fullName);
  Boolean existsByIndexNo(String index);
}
