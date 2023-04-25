package codingpentagon.sms.backend.repositories;
import codingpentagon.sms.backend.models.School;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SchoolRepository extends MongoRepository<School,Integer> {
}
