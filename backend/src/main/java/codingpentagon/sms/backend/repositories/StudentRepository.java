package codingpentagon.sms.backend.repositories;
import codingpentagon.sms.backend.models.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface StudentRepository extends MongoRepository<Student,Integer> {
    List<Student> findByClassID(int clsID);
}

