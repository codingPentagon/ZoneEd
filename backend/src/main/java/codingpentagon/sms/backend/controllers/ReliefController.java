package codingpentagon.sms.backend.controllers;

import codingpentagon.sms.backend.models.ScheduleSlotDetail;
import codingpentagon.sms.backend.models.Teacher;
import codingpentagon.sms.backend.services.ReliefService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ReliefController {
    private final ReliefService reliefService;

    public ReliefController(ReliefService reliefService) {
        this.reliefService = reliefService;
    }

    @GetMapping("/relief/teachersOnLeave/{sclID}")
    public List<Teacher> fetchTeachersOnLeave(@PathVariable int sclID) {
        return this.reliefService.findTeachersOnLeave(sclID);
    }

    @GetMapping("/relief/vacantSlots/{teacherID}")
    public List<ScheduleSlotDetail> fetchVacantSlots(@PathVariable int teacherID) {
        return this.reliefService.findVacantSlots(teacherID);
    }

    @GetMapping("/relief/availableTeachers/{sclID}/{period}")
    public List<Teacher> fetchAvailableTeachers(@PathVariable int sclID,@PathVariable int period){
        return this.reliefService.fetchAvailableTeachers(sclID,period);
    }
}
