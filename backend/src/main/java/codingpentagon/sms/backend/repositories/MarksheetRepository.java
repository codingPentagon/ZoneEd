package codingpentagon.sms.backend.repositories;

import codingpentagon.sms.backend.models.AttendanceRecord;
import codingpentagon.sms.backend.models.Marksheet;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Date;
import java.util.List;

public interface MarksheetRepository extends MongoRepository<Marksheet,Integer> {
    List<Marksheet> findByStudentIDAndYearAndTerm(int studentID, int year, int term);
}
