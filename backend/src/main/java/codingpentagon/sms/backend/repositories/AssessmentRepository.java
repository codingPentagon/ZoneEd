package codingpentagon.sms.backend.repositories;

import codingpentagon.sms.backend.models.Assessment;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface AssessmentRepository extends MongoRepository<Assessment,Integer> {
    List<Assessment> findAssessmentsBySclIDAndClsIDAndSubjectID(int sclID, int clsID, int subjectID);
}
