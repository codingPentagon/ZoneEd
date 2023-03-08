package codingpentagon.sms.backend.controllers;

import codingpentagon.sms.backend.models.Schedule;
import codingpentagon.sms.backend.repositories.ScheduleRepository;
import codingpentagon.sms.backend.services.ScheduleService;
import org.springframework.web.bind.annotation.*;

@RestController
public class ScheduleController {
    private final ScheduleService scheduleService;

    public ScheduleController(ScheduleRepository scheduleRepo){
        this.scheduleService = new ScheduleService(scheduleRepo);
    }

    @GetMapping("schedule/{teacherID}")
    public Schedule pushSchedule(@PathVariable int teacherID){
        return this.scheduleService.getSchedule(teacherID);
    }

    @PostMapping("schedule/")
    public void pullSchedule(@RequestBody Schedule schedule){
        this.scheduleService.storeSchedule(schedule);
    }
}
