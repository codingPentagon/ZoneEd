package codingpentagon.sms.backend.repositories;

import codingpentagon.sms.backend.models.AttendanceRecord;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Date;
import java.util.List;

public interface AttendanceRepository extends MongoRepository<AttendanceRecord,Integer> {
    List<AttendanceRecord> findByClassIDAndDateAfter(int classID, Date date);
}
