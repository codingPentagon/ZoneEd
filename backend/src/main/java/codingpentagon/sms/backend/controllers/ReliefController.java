package codingpentagon.sms.backend.controllers;

import codingpentagon.sms.backend.models.Teacher;
import codingpentagon.sms.backend.services.ReliefService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

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
}
