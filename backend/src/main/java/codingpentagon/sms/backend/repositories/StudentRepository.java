package codingpentagon.sms.backend.repositories;

import codingpentagon.sms.backend.models.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StudentRepository extends MongoRepository<Student,Integer> {
}
