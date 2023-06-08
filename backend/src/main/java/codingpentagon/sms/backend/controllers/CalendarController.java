package codingpentagon.sms.backend.controllers;

import codingpentagon.sms.backend.services.CalendarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CalendarController {
    private final CalendarService calendarService;
    @Autowired
    public CalendarController(CalendarService calendarService) {
        this.calendarService = calendarService;
    }
}
