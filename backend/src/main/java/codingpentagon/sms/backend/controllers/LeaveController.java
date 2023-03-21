package codingpentagon.sms.backend.controllers;

import codingpentagon.sms.backend.models.LeaveRecord;
import codingpentagon.sms.backend.models.LeaveRequest;
import codingpentagon.sms.backend.services.LeaveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LeaveController {
    LeaveService leaveService;
    @Autowired
    public LeaveController(LeaveService leaveService){
        this.leaveService=leaveService;

    }

    @GetMapping("leaves/requests/{teacherID}")
    public List<LeaveRequest> fetchLeaveRequests(@PathVariable int teacherID){
        return this.leaveService.findleaveRequest(teacherID);
    }

    @PostMapping("leaves/requests/")
    public void addleaveRequest(@RequestBody LeaveRequest leaveRequest){
        this.leaveService.saveleaveRequest(leaveRequest);
    }
    @PostMapping("leaves/")
    public void addLeaveRecord(@RequestBody LeaveRecord leaveRecord){
        this.leaveService.saveleaveRecord(leaveRecord);
    }

}
