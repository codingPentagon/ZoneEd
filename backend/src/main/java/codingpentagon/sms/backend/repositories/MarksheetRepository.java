package codingpentagon.sms.backend.repositories;

import codingpentagon.sms.backend.models.AttendanceRecord;
import codingpentagon.sms.backend.models.Marksheet;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Date;
import java.util.List;

public interface MarksheetRepository extends MongoRepository<Marksheet,Integer> {
    List<Marksheet> findByClassIDAndYearAndTerm(int classID, int year, int term);

    @Query(value = "{'studentID':?0}",fields = "{'classID': 1}")
    List<Integer> findByTheStudentID(int studentID);
}
