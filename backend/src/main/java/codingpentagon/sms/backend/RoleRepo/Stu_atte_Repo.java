package codingpentagon.sms.backend.RoleRepo;

import org.springframework.data.mongodb.repository.MongoRepository;

import RoleModel.Stu_atten;

public interface Stu_atte_Repo extends MongoRepository<Stu_atten,String> {
    
}
