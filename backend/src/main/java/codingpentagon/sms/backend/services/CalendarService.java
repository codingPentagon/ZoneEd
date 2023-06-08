package codingpentagon.sms.backend.services;

import codingpentagon.sms.backend.repositories.CalendarDetailRepository;
import codingpentagon.sms.backend.repositories.HolidayRepository;
import codingpentagon.sms.backend.repositories.SchoolEventRepository;
import org.springframework.stereotype.Service;

@Service
public class CalendarService {
    private final CalendarDetailRepository calendarDetailRepository;
    private final SchoolEventRepository schoolEventRepository;
    private final HolidayRepository holidayRepository;

    public CalendarService(CalendarDetailRepository calendarDetailRepository, SchoolEventRepository schoolEventRepository, HolidayRepository holidayRepository) {
        this.calendarDetailRepository = calendarDetailRepository;
        this.schoolEventRepository = schoolEventRepository;
        this.holidayRepository = holidayRepository;
    }
}
