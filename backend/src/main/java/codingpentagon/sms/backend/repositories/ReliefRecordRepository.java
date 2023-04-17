package codingpentagon.sms.backend.repositories;

import codingpentagon.sms.backend.models.ReliefRecord;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Date;

public interface ReliefRecordRepository extends MongoRepository<ReliefRecord, Integer> {
    ReliefRecord findBySclIDAndPeriodAndClassNameAndDateBetween(int sclID, int period, String className, Date date1, Date date2);
}
