package codingpentagon.sms.backend.controllers;

import codingpentagon.sms.backend.models.SlotDetail;
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
    public List<SlotDetail> fetchVacantSlots(@PathVariable int teacherID) {
        return this.reliefService.findVacantSlots(teacherID);
    }
}
