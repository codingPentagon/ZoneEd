package codingpentagon.sms.backend.repositories;

import codingpentagon.sms.backend.models.AcsGrantRequest;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface AcsGrantRequestRepository extends MongoRepository<AcsGrantRequest, Integer> {
    List<AcsGrantRequest> findBySclID(int sclID);
}
