package codingpentagon.sms.backend.repositories;

import codingpentagon.sms.backend.models.Teacher;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TeacherRepository extends MongoRepository<Teacher, Integer> {
    List<Teacher> findBySclIDAndIdNotIn(int sclID, List<Integer> teacherIDs);
}
