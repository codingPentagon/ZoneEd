package codingpentagon.sms.backend.repositories;

import codingpentagon.sms.backend.models.LeaveRecord;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LeaveRecordRepository extends MongoRepository <LeaveRecord,Integer>{
}
