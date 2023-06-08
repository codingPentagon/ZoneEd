package codingpentagon.sms.backend.repositories;

import codingpentagon.sms.backend.models.Holiday;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Date;
import java.util.List;

public interface HolidayRepository extends MongoRepository<Holiday, Integer> {
    List<Holiday> findByCalendarIDOrCalendarIDAndDateBetween(int calendarID1, int calendarID2, Date startDate, Date endDate);
}
