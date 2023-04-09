package codingpentagon.sms.backend.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import codingpentagon.sms.backend.models.Class;
import java.util.List;

public interface ClassRepository extends MongoRepository<Class, Integer> {
    List<Class> findClassesBySclID(int sclID);
}
