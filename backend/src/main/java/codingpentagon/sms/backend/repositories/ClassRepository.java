package codingpentagon.sms.backend.repositories;

import codingpentagon.sms.backend.models.Class;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;


public interface ClassRepository extends MongoRepository<Class,Integer> {
    List<Class> findBySclID(int sclID);
}
