package codingpentagon.sms.backend.repositories;

import codingpentagon.sms.backend.models.AttendanceSheet;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Date;
import java.util.List;

public interface AttendanceRepository extends MongoRepository<AttendanceSheet,Integer> {
    AttendanceSheet findByClassIDAndDateBetween(int classID, Date dayStart, Date dayEnd);
}
