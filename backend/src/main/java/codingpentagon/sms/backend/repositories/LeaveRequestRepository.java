package codingpentagon.sms.backend.repositories;

import codingpentagon.sms.backend.models.LeaveRequest;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface LeaveRequestRepository extends MongoRepository<LeaveRequest,Integer> {

    List<LeaveRequest> findByTeacherID(int teacherID);
}
