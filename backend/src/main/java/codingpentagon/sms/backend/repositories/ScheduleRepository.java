package codingpentagon.sms.backend.repositories;

import codingpentagon.sms.backend.models.Schedule;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ScheduleRepository extends MongoRepository<Schedule,Integer> {
    Schedule findByTeacherID(int teacherID);
}
