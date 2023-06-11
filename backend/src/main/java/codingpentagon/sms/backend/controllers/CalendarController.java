package codingpentagon.sms.backend.controllers;

import codingpentagon.sms.backend.models.CalendarDetail;
import codingpentagon.sms.backend.models.Holiday;
import codingpentagon.sms.backend.models.SchoolEvent;
import codingpentagon.sms.backend.services.CalendarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
public class CalendarController {
    private final CalendarService calendarService;
    @Autowired
    public CalendarController(CalendarService calendarService) {
        this.calendarService = calendarService;
    }

    @PostMapping("calendar/")
    public void addCalendar(@RequestBody CalendarDetail calendar) {
        calendarService.saveCalendar(calendar);
    }

    @GetMapping("calendar/active/{sclID}")
    public CalendarDetail fetchActiveCalendar(@PathVariable int sclID) {
        return calendarService.fetchActiveCalendar(sclID);
    }

    @GetMapping("calendar/{sclID}")
    public List<CalendarDetail> fetchCalendars(@PathVariable int sclID) {
        return calendarService.fetchCalendars(sclID);
    }

    @DeleteMapping("calendar/{deleteItemIDs}")
    public void removeCalendars(@PathVariable List<Integer> deleteItemIDs) {
        calendarService.deleteCalendars(deleteItemIDs);
    }

    @PostMapping("calendar/holidays/")
    public void addHoliday(@RequestBody Holiday holiday) {
        calendarService.saveHoliday(holiday);
    }

    @GetMapping("calendar/holidays/{calendarID}/{date}")
    public List<Holiday> fetchHolidays(@PathVariable int calendarID, @PathVariable Date date) {
        return calendarService.fetchHolidays(calendarID,date);
    }

    @DeleteMapping("calendar/holidays/{deleteItemIDs}")
    public void removeHolidays(@PathVariable List<Integer> deleteItemIDs) {
        calendarService.removeHolidays(deleteItemIDs);
    }

    @PostMapping("calendar/events/")
    public void addEvent(@RequestBody SchoolEvent event) {
        calendarService.saveEvent(event);
    }

    @GetMapping("calendar/events/{calendarID}/{date}")
    public List<SchoolEvent> fetchEvents(@PathVariable int calendarID, @PathVariable Date date) {
        return calendarService.fetchEvents(calendarID,date);
    }

    @DeleteMapping("calendar/events/{deleteItemIDs}")
    public void removeEvents(@PathVariable List<Integer> deleteItemIDs) {
        calendarService.removeEvents(deleteItemIDs);
    }

    @GetMapping("calendar/pending")
    public List<CalendarDetail> fetchPendingCalendars() {
        return calendarService.findPendingCalendars();
    }
}