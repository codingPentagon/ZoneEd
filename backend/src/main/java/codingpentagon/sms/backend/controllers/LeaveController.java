package codingpentagon.sms.backend.controllers;

import codingpentagon.sms.backend.models.LeaveRecord;
import codingpentagon.sms.backend.services.LeaveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class LeaveController {
    private final LeaveService leaveService;
    @Autowired
    public LeaveController(LeaveService leaveService){
        this.leaveService=leaveService;
    }

    @PostMapping("leaves/")
    public void addLeaveRecord(@RequestBody LeaveRecord leaveRecord){
        this.leaveService.saveLeaveRecord(leaveRecord);
    }
}
