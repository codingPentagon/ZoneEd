package codingpentagon.sms.backend.repositories;

import codingpentagon.sms.backend.models.ReliefRecord;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ReliefRecordRepository extends MongoRepository<ReliefRecord, Integer> {
}
