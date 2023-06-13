package codingpentagon.sms.backend.repositories;

import codingpentagon.sms.backend.models.Marksheet;
import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface MarksheetRepository extends MongoRepository<Marksheet,Integer> {
    List<Marksheet> findByClassIDAndYearAndTerm(int classID, int year, int term);
    List<Marksheet> findByClassIDAndYearAndTermOrderByTotalMarksDesc(int classID, int year, int term);

    @Aggregation(pipeline = {
            "{$match: {studentID: ?0}}",
            "{$group: {_id: '$classID'}}",
            "{$project: {classID: '$_id',_id: 0}}"
    })
    List<Integer> findDistinctClassIDsByStudentID(int studentID);
    List<Marksheet> findByStudentID(int studentID);
}
