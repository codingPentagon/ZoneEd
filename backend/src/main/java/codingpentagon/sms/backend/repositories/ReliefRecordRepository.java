package codingpentagon.sms.backend.repositories;

import codingpentagon.sms.backend.models.ReliefRecord;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Date;
import java.util.List;

public interface ReliefRecordRepository extends MongoRepository<ReliefRecord, Integer> {
    ReliefRecord findBySclIDAndPeriodAndClassNameAndDateBetween(int sclID, int period, String className, Date date1, Date date2);
    List<ReliefRecord> findBySclIDAndPeriodAndDateBetween(int sclID, int period, Date date1, Date date2);
}
