package codingpentagon.sms.backend.repositories;

import codingpentagon.sms.backend.models.CalendarDetail;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CalendarDetailRepository extends MongoRepository<CalendarDetail, Integer> {
    List<CalendarDetail> findBySclIDOrderByYearDesc(int sclID);

    CalendarDetail findBySclIDAndStatusAndYear(int sclID, String active, int year);

    List<CalendarDetail> findByStatus(String status);
}
