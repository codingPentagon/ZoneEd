package codingpentagon.sms.backend.repositories;

import codingpentagon.sms.backend.models.Holiday;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Date;
import java.util.List;

public interface HolidayRepository extends MongoRepository<Holiday, Integer> {
    List<Holiday> findByCalendarIDInAndDateBetween(List<Integer> calendarID, Date startDate, Date endDate);
}
