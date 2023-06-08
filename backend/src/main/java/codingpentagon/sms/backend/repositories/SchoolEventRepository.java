package codingpentagon.sms.backend.repositories;

import codingpentagon.sms.backend.models.SchoolEvent;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Date;
import java.util.List;

public interface SchoolEventRepository extends MongoRepository<SchoolEvent, Integer> {
    List<SchoolEvent> findByCalendarIDAndDatesContaining(int calendarID, Date date);
}
