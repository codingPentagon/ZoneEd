package codingpentagon.sms.backend.repositories;

import codingpentagon.sms.backend.models.Project;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ProjectRepository extends MongoRepository <Project,Integer>{
    List<Project> findBySchoolID (int sclID);
}
