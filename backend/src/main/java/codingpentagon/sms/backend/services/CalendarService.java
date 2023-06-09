package codingpentagon.sms.backend.services;

import codingpentagon.sms.backend.models.CalendarDetail;
import codingpentagon.sms.backend.models.Holiday;
import codingpentagon.sms.backend.models.SchoolEvent;
import codingpentagon.sms.backend.repositories.CalendarDetailRepository;
import codingpentagon.sms.backend.repositories.HolidayRepository;
import codingpentagon.sms.backend.repositories.SchoolEventRepository;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Random;

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

    public void saveCalendar(CalendarDetail calendar) {
        if (calendar.getId() == 0) {
            calendar.setId(new Random().nextInt(500));
        }
        this.calendarDetailRepository.save(calendar);
    }

    public List<CalendarDetail> fetchCalendars(int sclID) {
        return this.calendarDetailRepository.findBySclIDOrderByYearDesc(sclID);
    }

    public void deleteCalendars(List<Integer> deleteItemIDs) {
        this.calendarDetailRepository.deleteAllById(deleteItemIDs);
    }

    public void saveHoliday(Holiday holiday) {
        if (holiday.getId() == 0) {
            holiday.setId(new Random().nextInt(500));
        }
        this.holidayRepository.save(holiday);
    }

    public List<Holiday> fetchHolidays(int calendarID, Date date) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        calendar.set(Calendar.DAY_OF_MONTH, 1);
        Date startDate = calendar.getTime();
        calendar.set(Calendar.DAY_OF_MONTH, calendar.getActualMaximum(Calendar.DAY_OF_MONTH));
        Date endDate = calendar.getTime();

        List<Integer> calendarIDs = List.of(calendarID,0);

        return this.holidayRepository.findByCalendarIDInAndDateBetween(calendarIDs, startDate, endDate);
    }

    public void removeHolidays(List<Integer> deleteItemIDs) {
        this.holidayRepository.deleteAllById(deleteItemIDs);
    }

    public void saveEvent(SchoolEvent event) {
        if (event.getId() == 0) {
            event.setId(new Random().nextInt(1000));
        }
        this.schoolEventRepository.save(event);
    }

    public List<SchoolEvent> fetchEvents(int calendarID, Date date) {
        return this.schoolEventRepository.findByCalendarIDAndDatesContaining(calendarID, date);
    }

    public void removeEvents(List<Integer> deleteItemIDs) {
        this.schoolEventRepository.deleteAllById(deleteItemIDs);
    }

    public CalendarDetail fetchActiveCalendar(int sclID) {
        int year = Calendar.getInstance().get(Calendar.YEAR);
        return this.calendarDetailRepository.findBySclIDAndStatusAndYear(sclID, "active",year);
    }
}
