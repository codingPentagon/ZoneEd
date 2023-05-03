package codingpentagon.sms.backend.repositories;

import codingpentagon.sms.backend.models.Subject;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SubjectRepository extends MongoRepository<Subject,Integer> {
}
