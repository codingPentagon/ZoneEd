package codingpentagon.sms.backend.RoleRepo;

import org.springframework.data.mongodb.repository.MongoRepository;

import RoleModel.Stud_marks;


public interface MarksRepo extends MongoRepository<Stud_marks,String>{
    
}
