package codingpentagon.sms.backend.repositories;

import codingpentagon.sms.backend.models.Teacher;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TeacherRepository extends MongoRepository<Teacher, Integer> {
}
