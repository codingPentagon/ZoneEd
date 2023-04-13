package codingpentagon.sms.backend.repositories;

import codingpentagon.sms.backend.models.LeaveRecord;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Date;
import java.util.List;

public interface LeaveRecordRepository extends MongoRepository<LeaveRecord, Integer> {
    List<LeaveRecord> findBySclIDAndDatesContaining(int sclID, Date date);
}