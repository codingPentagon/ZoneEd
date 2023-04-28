package codingpentagon.sms.backend.RoleRepo;

import RoleModel.TeacherReg;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface TchRegRepo extends MongoRepository<TeacherReg, String> {
  Optional<TeacherReg> findById(String fullName);// Method declaration to find a TeacherReg entity by full name.
}
